import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const LoginUser = () => {
    let history = useHistory();
    let location = useLocation();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(true)
    
    const submit = async (e) => {
        e.preventDefault()
        const res = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        const payload = await res.json()
        if (res.status >= 400){
            setAuth(false)
        } else {
            sessionStorage.setItem('token', payload.token)
            let {from} = location.state || {from: {pathname: '/'} }
            history.replace(from)
        }
    }
    
    return (
        <main className="contactMe">
            {!auth &&
                <h4>Incorrect Username or Password</h4>
            }
            <form className="contact-form" name="login" onSubmit={submit} >
                <label for="username">Username:</label>
                <input type="text" name="username" id="username"  autocomplete="off" placeholder="email" onChange={e => setUserName(e.target.value)}/>
                <br/>
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" autocomplete="off" onChange={e => setPassword(e.target.value)}/>
                <br/>
                <input className="form-btn" type="submit" value="Login"/>
            </form>
        </main>
    )
}

export default LoginUser
