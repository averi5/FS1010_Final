import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    const token = sessionStorage.getItem('token')
    const [listing, setListing] = useState([])
    const [loggedIn, setLoggedIn] = useState(false)
    
    useEffect( () => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/contact_form/entries', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setListing(data)
            setLoggedIn(response.status)
        }
        getData()
    }, [token])
    return (
        <main>
            {loggedIn === 403 &&
                <h1>403 Forbidden</h1>
            }
            {listing.length === 0 &&
                <h4>No listings found</h4>
            }
            {listing.length > 0 &&
                listing.map((entry, key) => <div key={key}><p className='entry'>{entry.id}</p><h2 className='entry'>{entry.name}</h2><h4 className='entry'>{entry.phoneNumber}</h4><h4 className='entry'>{entry.email}</h4><p className='entry'>{entry.content}</p></div>)
            }
        </main>
    )
}

export default Admin
