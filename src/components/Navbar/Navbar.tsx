import React from "react";
import s from "./Navbar.module.css";


const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <a
                    className={s.item}
                    href="/profile">Profile
                </a>
            </div>
            <div>
                <a
                    className={s.item}
                    href="/dialogs">Messages
                </a>
            </div>
            <div>
                <a
                    className={s.item} >News
                </a>
            </div>
            <div>
                <a
                    className={s.item}>Music
                </a>
            </div>
            <div>
                <a
                    className={s.item}>Settings
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
