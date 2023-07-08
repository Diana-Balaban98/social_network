import {DialogsPageType, MessagesType} from "./state";
import {v1} from "uuid";
import {ProfileActionsType} from "./profile-reducer";

export const dialogsReducer = (state: DialogsPageType, action: DialogsActionsType | ProfileActionsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessagesType = {id: v1(), message: state.newMessageText};
            state.messages.unshift(newMessage);
            state.newMessageText = ""
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            return state
        default: return state
    }
}

export type DialogsActionsType = ReturnType<typeof updateNewMessageTextAC> | ReturnType<typeof sendMessageAC>

export const updateNewMessageTextAC = (newMessage: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT' as const,
    newMessage
})

export const sendMessageAC = () => ({type: 'SEND-MESSAGE' as const})


