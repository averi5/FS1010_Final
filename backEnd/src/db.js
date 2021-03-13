// None of these need to be npm installed as they come with Node.js.
import util from 'util'
import fs from 'fs'
import path from 'path'
import argon2 from 'argon2'

/**
 * Allows us to use promises instead of callbacks for reading and writing files.
 * @see https://gist.github.com/mpalmr/0425308566af4e1b42b860702c40989c
 */
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Defines the path for the database file `items.json`.
const userPath = path.resolve('./data/users.json');
const entryPath = path.resolve('./data/entries.json');

/**
 * Reads all the contents out of the `items.json` file and returns the *parsed* JSON.
 * @returns {Array<object>} DB contents parsed from JSON
 */
async function readUsers() {
  const json = await readFile(userPath);
  return JSON.parse(json);
}
async function readEntry() {
  const json = await readFile(entryPath);
  return JSON.parse(json);
}

/**
 * Replaces the contents of the `items.json` file with JSON derrived from the `items` param.
 * @param {Array<object>} items to be parsed into JSON to be made the file contents.
 * @returns {Promise<undefined>} resolves when file contents are written
 */
async function writeItems(items, loc) {
  // The `null` and `2` here are so the JSON is formatted in a readable format, it's not required.
  const json = JSON.stringify(items, null, 2);
  if (loc == 'user'){
  // We return the promise here so the promise returned by `writeItems` doesn't resolve until
  // all the items are actually written.
  fs.access(userPath, fs.constants.F_OK, (err) => {
    if (err){
    console.log({message: 'users.json file created in Data folder'})
    return writeFile(userPath, json);
    }
  })
  return writeFile(userPath, json);
  } else {
    fs.access(entryPath, fs.constants.F_OK, (err) => {
      if (err){
      console.log({message: 'entires.json file created in Data folder'})
      return writeFile(userPath, json);
      }
    })
    return writeFile(entryPath, json);
  }
}

/**
* @param {Array<object>} user to be parsed into JSON to be made the file contents.
* @returns {Promise<object|null>} matching item
*/
const validateUser = async (email, pass) => {
  const users = await readUsers();
  try {
    const findUser = users.find((a) => a.email === email)
    if (findUser){
      if(await argon2.verify(findUser.password, pass)){
        return true
      }
    } else {
      return false
    }
  } catch (err){
    console.log(err)
    return false
  }

}


/**
 * Gets an item by ID. If the item doesn't exist, return `null`.
 * @param {string} id to get item by.
 * @returns {Promise<object|null>} matching item
 */
async function getItemById(id) {
  const items = await readEntry(); // Read all items out of DB

  // Find item matching the ID passed into this function
  let matchedItem;
  items.forEach((item) => {
    if (item.id === id) {
      matchedItem = item;
    }
  });
  // Return `matchedItem` if exists, else `null`
  if (matchedItem) {
    return matchedItem;
  }
  return null;
}


/**
 * Creates a new item.
 * @param {object} newItem new item to add to DB
 * @returns {Promise<undefined>} resolves when item is created in DB
 */
async function createItem(newItem) {
  let user = newItem.hasOwnProperty('password')
  if (user){
    const items = await readUsers(); // Read all items out of DB
    items.push(newItem); // Add new item to items

    return writeItems(items, 'user');

  } else {
    const items = await readEntry(); // Read all items out of DB
    items.push(newItem); // Add new item to items

    return writeItems(items, 'entry');
  }
  
}

// Now we export everything we want to expose to anything requiring this file as a module.
export {
  getItemById,
  createItem,
  validateUser,
  // Here we give the readItems function a different name that makes sense for files requiring it
  readUsers as getAllUsers,
  readEntry as getAllEntries,
};
