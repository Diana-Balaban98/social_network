import {v1} from "uuid";
<<<<<<< HEAD
import {PostsType, ProfilePageType, store} from "./store";
import {DialogsActionsType} from "./dialogs-reducer";

const initState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hello, how are you?", likesCount: 5},
        {id: v1(), message: "I love world!", likesCount: 10},
        {id: v1(), message: "It's my first post!", likesCount: 3},
        {id: v1(), message: "Go to walk", likesCount: 49},
        {id: v1(), message: "Mmmm, great!", likesCount: 0},
    ],
    newPostText: ""
}

export const profileReducer = (state = initState, action: ProfileActionsType | DialogsActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {id: v1(), message: store._state.profilePage.newPostText, likesCount: 0};
            state.posts.unshift(newPost);
            state.newPostText = ""
=======
import {PostsType, ProfilePageType, store} from "./state";
import {DialogsActionsType} from "./dialogs-reducer";

export const profileReducer = (state: ProfilePageType, action: ProfileActionsType | DialogsActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
           const newPost: PostsType = {id: v1(), message: store._state.profilePage.newPostText, likesCount: 0};
           state.posts.unshift(newPost);
           state.newPostText = ""
>>>>>>> 3ca9c25ed428e665db47fc0d4c226c97175a77c8
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
<<<<<<< HEAD
        default:
            return state
=======
        default: return state
>>>>>>> 3ca9c25ed428e665db47fc0d4c226c97175a77c8
    }
}

export type ProfileActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => ({type: "ADD-POST" as const})

export const updateNewPostTextAC = (newText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT' as const,
    newText
})
