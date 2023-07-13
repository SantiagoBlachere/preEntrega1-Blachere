import React from "react";
import  ReactDOM  from "react-dom";
import '../style/style.css'
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';


function Navbar() {
    
    return (
        <div className="navbar">
            <Link to="/"><h1>Gotria BookStore 🕮 </h1></Link>
            <img src="" alt="" />
            <div className="genres">
                <div className="horror"><Link to="/genre/horror">Horror</Link></div>
                <div className="sc"><Link to="/genre/science%20fiction">Science Fiction</Link></div>
                <div className="romance"><Link to="/genre/romance">Romance</Link></div>
            </div>
            <ul className="linksNavbar">
                <li>Contacto</li>
                <li>Instagram</li>
                <li>Sobre nosotros</li>
                
                
            </ul>
            <CartWidget />
            
        </div>
    )
}

export default Navbar;