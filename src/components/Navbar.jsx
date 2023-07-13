import React from "react";
import  ReactDOM  from "react";
import '../style/style.css'
import CartWidget from "./CartWidget";


function Navbar() {
    
    return (
        <div className="navbar">
            <h1>Librería Gotria</h1>
            <img src="" alt="" />
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