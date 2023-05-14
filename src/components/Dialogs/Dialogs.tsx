import React, {useState} from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogItemProps = {
    name: string
    id: string
}

const DialogItem = ({id, name}: DialogItemProps) => {
    let path = "/dialogs/" + id;

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

type MessageProps = {
    message: string
}

const Message = ({ message }: MessageProps) => {

    return (
        <div className={s.message}>{message}</div>
    )
}


type UsersType = {
    name: string
    id: string
}

type messagesType = {
    id: string
    message: string
}

export const Dialogs = () => {

    const messages: messagesType[] = [
        {id: "1", message: "Hi"},
        {id: "2", message: "How is your it-kamasutra?"},
        {id: "3", message: "Yo"},
        {id: "4", message: "Go to walk"},
        {id: "5", message: "Mmmm, great!"},
        {id: "6", message: "I'm Valera"},
    ]

    const users: UsersType[] = [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Sasha"},
        {id: "3", name: "Diana"},
        {id: "4", name: "Julia"},
        {id: "5", name: "Victor"},
        {id: "6", name: "Alina"},
    ]

    const [u, setUsers] = useState<UsersType[]>(users);

    const dialogsData = u.map((user, index) => {
        return <DialogItem key={index} name={user.name} id={user.id}></DialogItem>
    })

    const messagesData = messages.map((m, index) => {
        return <Message key={index} message={m.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData}
            </div>

            <div className={s.messages}>
                {messagesData}
            </div>
        </div>
    )
}