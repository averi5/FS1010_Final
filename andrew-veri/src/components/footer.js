import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return (
            <footer>       
            <p>&copy; 2020 Andrew Veri &emsp;&emsp; <Link to="/contactMe">Email Me</Link> &emsp;&emsp; Have Fun and Enjoy</p>
            </footer>
        )
    }
}

export default Footer;