import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogItemProps = {
    name: string
    id: string
}

export const  DialogItem = ({id, name}: DialogItemProps) => {
    let path = "/dialogs/" + id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}