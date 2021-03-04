import React from 'react';
import logo from '../Logo_rev.png';
import { Link } from "react-router-dom";

class Nav extends React.Component{
    render(){
        return (
            <header>
            <img src={logo} className="logo" alt="AV"/>
            <h1 className="name">Andrew Veri</h1>
            <h4 className="tagline">Evolve into Efficiency</h4>
            <nav className="nav">
                <ul className="main-menu">
                    <li className="menu-item">
                        <Link to="/" className="buttons">Home</Link> 
                    </li> 
                    <li className="menu-item">
                        <Link to="/portfolio" className="buttons">Portfolio</Link> 
                    </li>
                    <li className="menu-item">
                        <Link to="/resume" className="buttons">Resume</Link> 
                    </li>
                    <li className="menu-item">
                        <Link to="/contactMe" className="buttons">Contact</Link> 
                    </li>
                </ul>
            </nav>
        </header>
        )
    }
}

export default Nav;