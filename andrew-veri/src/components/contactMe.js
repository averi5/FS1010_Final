import React, { useState } from 'react'

const ContactMe = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")

    const submit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, phoneNumber, content})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Thanks for your message!\nI'll get back to you as soon as I can.`)
        }
    }
    return (
        <main className="contactMe">
            <h2>What's on your mind?</h2><br/>
            <form className="contact-form" name="contactForm" onSubmit={submit}>
                <label for="name">Name:</label>
                <input type="text" name="name" id="name"  autoComplete="off" onChange={e => setName(e.target.value)}/>
                <br/>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" autoComplete="off" placeholder="name@email.com" onChange={e => setEmail(e.target.value) }/>
                <br/>
                <label for="phone">Phone:</label>
                <input type="tel" name="phone" id="phone" autoComplete="off" onChange={e => setPhoneNumber(e.target.value)}/>
                <br/>
                <label id="msg" for="message">Message:</label><br/>
                <textarea rows="5" cols="30" name="message" id="message" autoComplete="off" onChange={e => setContent(e.target.value)}></textarea>
                <br/>
                <input className="form-btn" type="submit" value="Send"/>
            </form>
        </main>
    )
}

export default ContactMe
