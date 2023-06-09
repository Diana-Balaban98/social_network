import React, {useRef} from "react";
import Post from "./Post/Post";
import s from  "./MyPosts.module.css"
import {PostsType} from "../../../redux/state";
import {log} from "util";



type MyPostsPropsType = {
    posts: PostsType[]
}

const MyPosts = ({posts}: MyPostsPropsType) => {
    const postsData = posts.map((p, index) => {
        return <Post key={index} message={p.message} likesCount={p.likesCount}/>
    })

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const onClickAddPost = () => {
        newPostElement.current && alert(newPostElement.current.value)
        console.log(newPostElement.current?.value)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <textarea ref={newPostElement}>your news...</textarea>
            <button onClick={onClickAddPost} className={s.button}>Send</button>
            <div className={s.messages}>
                {postsData}
            </div>
        </div>
    )
}

export default MyPosts;
