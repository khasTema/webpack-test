import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="nav">
            <h2 className="title">This is React with WebPack</h2>
            <div className="nav--list">
                <Link to="/">Star Wars</Link>
                <Link to="/about">Lorem</Link>
                <Link to="/contacts">Counter</Link>
            </div>
        </nav>
    )
}