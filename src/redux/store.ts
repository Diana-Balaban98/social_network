import {v1} from "uuid";
import {ProfileActionsType, profileReducer} from "./profile-reducer";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";

// types
export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type MessagesType = {
    id: string
    message: string
}

export type DialogsType = {
    id: string
    name: string
    avatar: string
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageText: string
}

export type SidebarType = {
    friends: DialogsType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: StateType
    _callSubscriber(state: StateType): void
    getState(): StateType
    subscribe(observer: (state: StateType) => void): void
    dispatch(action: ProfileActionsType | DialogsActionsType): void
}


// store
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hello, how are you?", likesCount: 5},
                {id: v1(), message: "I love world!", likesCount: 10},
                {id: v1(), message: "It's my first post!", likesCount: 3},
                {id: v1(), message: "Go to walk", likesCount: 49},
                {id: v1(), message: "Mmmm, great!", likesCount: 0},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: v1(),
                    name: "Julia",
                    avatar: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png"
                },
                {
                    id: v1(),
                    name: "Diana",
                    avatar: "https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_people_avatar_icon_230018.png"
                },
                {
                    id: v1(),
                    name: "Sasha",
                    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png"
                }]
        },
    },
    _callSubscriber(state: StateType) {
        console.log("State was changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}


// @ts-ignore
window.store = store
