import React from "react";
import "./Navbar.css";


const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <a className="item" href="#">Profile</a>
            </div>
            <div>
                <a className="item" href="#">Messages</a>
            </div>
            <div>
                <a className="item" href="#">News</a>
            </div>
            <div>
                <a className="item" href="#">Music</a>
            </div>
            <div>
                <a className="item" href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;
