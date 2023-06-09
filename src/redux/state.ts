import {v1} from "uuid";
import {rerenderEntireTree} from "../render";



// types
export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type MessageType = {
    id: string
    message: string
}

export type DialogType = {
    id: string
    name: string
    avatar: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type DialogPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageText: string
}

export type SidebarType = {
    friends: DialogType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

// data
export const state: StateType = {
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
            {id: v1(), name: "Dimych", avatar: "https://ru.seaicons.com/wp-content/uploads/2015/09/Man-16-icon.png"},
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
                name: "Jon",
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
    }
}
// @ts-ignore
window.state = state

export const addPost = () => {
    const newPost: PostType = {id: v1(), message: state.profilePage.newPostText, likesCount: 0};
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const updateNewMessageText = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree(state)
}

export const addMessage = () => {
    const newMessage =  {id: v1(), message: state.dialogsPage.newMessageText}
    state.dialogsPage.messages.unshift(newMessage)
    state.dialogsPage.newMessageText = ""
    rerenderEntireTree(state)
}
