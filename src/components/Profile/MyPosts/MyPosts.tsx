import React, {useRef} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {ProfileActionsType} from "../../../redux/profile-reducer";
import {DialogsActionsType} from "../../../redux/dialogs-reducer";
import {ProfilePageType} from "../../../redux/store";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch(action: ProfileActionsType | DialogsActionsType): void
}

const MyPosts = ({profilePage, dispatch}: MyPostsPropsType) => {
    let {posts, newPostText} = profilePage

    const postsData = posts.map((p, index) => {
        return <Post key={index} message={p.message} likesCount={p.likesCount}/>
    })

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const onClickAddPost = () => {
        dispatch(addPostAC())
    }

    const onChangeHandler = () => {
        const text = newPostElement.current!.value
        dispatch(updateNewPostTextAC(text))
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <textarea
                       onChange={onChangeHandler}
                       value={newPostText}
                       ref={newPostElement}
            />
            <button onClick={onClickAddPost} className={s.button}>Add</button>
            <div className={s.messages}>
                {postsData}
            </div>
        </div>
    )
}

export default MyPosts;
