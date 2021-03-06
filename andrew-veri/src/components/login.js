import React, { useState } from 'react'
import PropTypes from 'prop-types'

function LoginUser(credentials) {
    return fetch('http://localhost:4000/auth', 
        {method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login({setToken}) {
    
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const submit = async e => {
        e.preventDefault()
        const token = await LoginUser({
            username,
            password
        })
        setToken(token)
    }

    return (
        <main class="contactMe">
            <form class="contact-form" name="login" onsubmit={submit} >
                <label for="username">Username:</label>
                <input type="text" name="username" id="username"  autocomplete="off" placeholder="email" onChange={e => setUserName(e.target.value)}/>
                <br/>
                <label for="password">Password:</label>
                <input type="test" name="password" id="password" autocomplete="off" onChange={e => setPassword(e.target.value)}/>
                <br/>
                <input class="form-btn" type="submit" value="Login"/>
            </form>
        </main>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login
