import {v1} from "uuid";


// types
export  type PostsType = {
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
}

type StateType = {
    posts: PostsType[]
    messages: MessagesType[]
    dialogs: DialogsType[]
}

// data
const posts: PostsType[] = [
    {id: v1(), message: "Hello, how are you?", likesCount: 5},
    {id: v1(), message: "I love world!", likesCount: 10},
    {id: v1(), message: "It's my first post!", likesCount: 3},
    {id: v1(), message: "Go to walk", likesCount: 49},
    {id: v1(), message: "Mmmm, great!", likesCount: 0},
]

const messages: MessagesType[] = [
    {id: v1(), message: "Hi"},
    {id: v1(), message: "How is your it-kamasutra?"},
    {id: v1(), message: "Yo"},
    {id: v1(), message: "Go!"},
    {id: v1(), message: "Mmmm, great!"},
    {id: v1(), message: "I'm Valera"},
]

const dialogs: DialogsType[] = [
    {id: v1(), name: "Dimych"},
    {id: v1(), name: "Sasha"},
    {id: v1(), name: "Diana"},
    {id: v1(), name: "Julia"},
    {id: v1(), name: "Victor"},
    {id: v1(), name: "Alina"},
]

export const state: StateType = {
    posts: posts,
    messages: messages,
    dialogs: dialogs
}