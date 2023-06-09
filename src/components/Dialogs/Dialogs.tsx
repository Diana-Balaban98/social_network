import React, {useRef} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessage, DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    updateNewMessageText: (newMessage: string) => void
    addMessage: () => void
}

export const Dialogs = ({dialogsPage, updateNewMessageText, addMessage}: DialogsPropsType) => {
    const {dialogs, messages} = dialogsPage

    const dialogsData = dialogs.map((d, index) => {
        return <DialogItem key={index} name={d.name} id={d.id} avatar={d.avatar}></DialogItem>
    })
    const messagesData = messages.map((m, index) => {
        return <Message key={index} message={m.message}/>
    })

    const newMessageElement = useRef<HTMLTextAreaElement>(null)

    const onChangeHandler = () => {
        updateNewMessageText(newMessageElement.current!.value)
    }

    const onClickAddMessage = () => {
        addMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData}
            </div>

            <div className={s.messages}>
                {messagesData}
            </div>
            <div className={s.sendMessage}>
                <textarea onChange={onChangeHandler} ref={newMessageElement}/>
                <button onClick={onClickAddMessage}>Add</button>
            </div>
        </div>

    )
}