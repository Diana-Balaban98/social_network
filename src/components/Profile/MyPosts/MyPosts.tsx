import React from "react";
import Post from "./Post/Post";
import s from  "./MyPosts.module.css"
import {PostsType} from "../../../redux/state";



type MyPostsPropsType = {
    posts: PostsType[]
}

const MyPosts = ({posts}: MyPostsPropsType) => {
    const postsData = posts.map((p, index) => {
        return <Post key={index} message={p.message} likesCount={p.likesCount}/>
    })

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <textarea>your news...</textarea>
            <button className={s.button}>Send</button>
            <div className={s.messages}>
                {postsData}
            </div>
        </div>
    )
}

export default MyPosts;
