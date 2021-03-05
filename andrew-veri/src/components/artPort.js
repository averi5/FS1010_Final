import React from 'react'
import images from '../images';
import { Link } from "react-router-dom";

class artPort extends React.Component {
    render() {

        return (
            <main className="artPort">
                {images.imagesArt.map((key, index) => (
                    <Link to={`/portfolio/artPort/${key.id}`} className="portfolio"> <img src={key.src} key={index} alt="Art Portfolio"/></Link> 
                ))}
            </main>
        )
    }
}

export default artPort
