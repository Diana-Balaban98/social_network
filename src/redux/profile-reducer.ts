import {v1} from "uuid";
import {PostsType, ProfilePageType, store} from "./state";
import {DialogsActionsType} from "./dialogs-reducer";

export const profileReducer = (state: ProfilePageType, action: ProfileActionsType | DialogsActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
           const newPost: PostsType = {id: v1(), message: store._state.profilePage.newPostText, likesCount: 0};
           state.posts.unshift(newPost);
           state.newPostText = ""
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default: return state
    }
}

export type ProfileActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => ({type: "ADD-POST" as const})

export const updateNewPostTextAC = (newText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT' as const,
    newText
})
