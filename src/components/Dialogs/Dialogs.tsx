import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import TextArea from "antd/es/input/TextArea";

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = ({state: {dialogs, messages}}: DialogsPropsType) => {

    const dialogsData = dialogs.map((d, index) => {
        return <DialogItem key={index} name={d.name} id={d.id} avatar={d.avatar}></DialogItem>
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
            <div>
                <textarea>Add</textarea>
                <button>Add</button>
            </div>
        </div>

    )
}