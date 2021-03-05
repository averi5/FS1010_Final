import React from 'react';
import { Link } from "react-router-dom";

class Portfolio extends React.Component{
    render(){
        return (
            <main className="portMain">
            <Link to={'/portfolio/designPort'} className="portfolio"> <img src='/img/des_port.jpg' height="400px" width="400px" alt="Design Portfolio"></img><h2>Design Portfolio</h2></Link>
            <Link to={'/portfolio/artPort'} className="portfolio"> <img src='/img/art_port.jpg' height="400px" width="400px" alt="Art Portfolio"></img><h2>Art Portfolio</h2></Link>
        </main>
        )
    }
}
export default Portfolio;
