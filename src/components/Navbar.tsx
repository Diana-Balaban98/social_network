import React from "react";
import s from "./Navbar.module.css";
// {`${s.item} ${s.active}`} синтаксис для задания более одного класса элементу



const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <a className={s.item} href="#">Profile</a>
            </div>
            <div>
                <a className={s.item} href="#">Messages</a>
            </div>
            <div>
                <a className={s.item} href="#">News</a>
            </div>
            <div>
                <a className={s.item} href="#">Music</a>
            </div>
            <div>
                <a className={s.item} href="#">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;
