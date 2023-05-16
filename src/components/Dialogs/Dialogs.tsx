import React, {useState} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}

export const Dialogs = ({messages, dialogs}: DialogsPropsType) => {

    const dialogsData = dialogs.map((d, index) => {
        return <DialogItem key={index} name={d.name} id={d.id}></DialogItem>
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