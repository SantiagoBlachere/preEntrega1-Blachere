import React from "react";
import { ReactDOM } from "react";
import '../style/style.css'
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

function Navbar() {
    let greeting = "Hola! Bienvenido a la librería Gotria"
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
            <ItemListContainer greeting={greeting} />
        </div>
    )
}

export default Navbar;