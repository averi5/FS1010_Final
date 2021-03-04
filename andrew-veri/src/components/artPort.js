import React from 'react'
import images from '../images';
import { Link } from "react-router-dom";


export class artPort extends React.Component {
    render() {
        return (
            <main className="artPort">
            {images.imagesArt.map((key, index) => (<Link to='/portfolio/' className="portfolio"> <img src={key.src} key={index} height="400px" width="400px" alt="Design Portfolio"/></Link> ))}
        </main>
        )
    }
}

export default artPort
