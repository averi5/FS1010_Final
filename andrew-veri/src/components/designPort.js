import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import images from '../images';

class DesignPort extends React.Component{
    render(){
        
        // const importImages = (r) => {
        //     let images = [];
        //     r.keys().map((item) => { images[item] = r(item); });
        //     return images;
        // }
        //const imagesDesign = importImages(require.context('../img/portfolio/design', false, /\.(png|jpe?g|svg)$/));

        console.log(images)

        return (
            <main className="designPort">
                {images.imagesDesign.map((key, index) => (<Link to='/portfolio/' className="portfolio"> <img src={key.src} key={index} height="400px" width="400px" alt="Design Portfolio"/></Link> ))}
            </main>
        )
    }
}

export default DesignPort;