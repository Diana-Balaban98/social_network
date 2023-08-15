import {DialogsPageType, MessagesType} from "./store";
import {v1} from "uuid";
import {ProfileActionsType} from "./profile-reducer";



const initialState: DialogsPageType = {
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How is your it-kamasutra?"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Go!"},
        {id: v1(), message: "Mmmm, great!"},
        {id: v1(), message: "I'm Valera"},
    ],
    dialogs: [
        {
            id: v1(),
            name: "Dimych",
            avatar: "https://ru.seaicons.com/wp-content/uploads/2015/09/Man-16-icon.png"
        },
        {
            id: v1(),
            name: "Sasha",
            avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png"
        },
        {
            id: v1(),
            name: "Diana",
            avatar: "https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_people_avatar_icon_230018.png"
        },
        {
            id: v1(),
            name: "Julia",
            avatar: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png"
        },
        {
            id: v1(),
            name: "Jhon",
            avatar: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-1-avatar-2754574_120513.png"
        },
        {
            id: v1(),
            name: "Alina",
            avatar: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043231-afro-female-person-woman_113288.png"
        },
    ],
    newMessageText: ""
}

export type DialogsActionsType = ReturnType<typeof updateNewMessageTextAC> | ReturnType<typeof sendMessageAC>

export const updateNewMessageTextAC = (newMessage: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT' as const,
    newMessage
})

export const sendMessageAC = () => ({type: 'SEND-MESSAGE' as const})


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
        default:
            return state
    }
}



