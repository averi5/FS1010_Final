import React from 'react';
import { Link } from "react-router-dom";
import images from '../images';

class DesignPort extends React.Component{
    render(){

        return (
            <main className="designPort">
                {images.imagesDesign.map((key, index) => ( 
                    <Link to={`/portfolio/designPort/${key.id}`} className="portfolio"> <img src={key.src} key={index} alt="Design Portfolio"/></Link> 
                ))}
            </main>
        )
    }
}

export default DesignPort;