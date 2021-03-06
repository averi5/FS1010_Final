import React, { useState } from 'react'
import PropTypes from 'prop-types'

class contactMe extends React.Component {

    render() {
        
        return (
            <main class="contactMe">
                <h2>What's on your mind?</h2><br/>
                <form class="contact-form" name="contactForm" onsubmit='{submit}' >
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name"  autocomplete="off" />
                    <br/>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" autocomplete="off" placeholder="name@email.com" />
                    <br/>
                    <label for="phone">Phone:</label>
                    <input type="tel" name="phone" id="phone" autocomplete="off" />
                    <br/>
                    <label id="msg" for="message">Message:</label><br/>
                    <textarea rows="5" cols="30" name="message" id="message" autocomplete="off"></textarea>
                    <br/>
                    <input class="form-btn" type="submit" value="Send"/>
                </form>
            </main>
        )
    }
}

export default contactMe
