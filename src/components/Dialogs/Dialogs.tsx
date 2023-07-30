import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsActionsType, sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {ProfileActionsType} from "../../redux/profile-reducer";
<<<<<<< HEAD
import {DialogsPageType} from "../../redux/store";
=======
import {DialogsPageType} from "../../redux/state";
>>>>>>> 3ca9c25ed428e665db47fc0d4c226c97175a77c8

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch(action: ProfileActionsType | DialogsActionsType): void
}

export const Dialogs = ({dialogsPage, dispatch}: DialogsPropsType) => {
    const {dialogs, messages, newMessageText} = dialogsPage

    const dialogsData = dialogs.map((d, index) => {
        return <DialogItem key={index} name={d.name} id={d.id} avatar={d.avatar}></DialogItem>
    })
    const messagesData = messages.map((m, index) => {
        return <Message key={index} message={m.message}/>
    })


    const onChangeSendMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        dispatch(updateNewMessageTextAC(text))
    }

    const onClickHandler = () => {
        dispatch(sendMessageAC())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData}
            </div>

            <div className={s.messages}>
                <div>{messagesData}</div>
                <div>
                    <textarea
                              onChange={onChangeSendMessage}
                              value={newMessageText}
                    />
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
        </div>
)
}