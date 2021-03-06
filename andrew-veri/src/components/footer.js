import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return (
            <footer>       
            <p>&copy; 2021 Andrew Veri &emsp;&emsp; <Link to="/contactMe">Email Me</Link> &emsp;&emsp; Have Fun and Enjoy  &emsp;&emsp; <Link to="/login">Login</Link></p>
            <p>All images are the property of Andrew Veri</p>
            </footer>
        )
    }
}

export default Footer;