import React from "react";
import Post from "./Post/Post";
import s from  "./MyPosts.module.css"

type PostType = {
    id: string
    message: string
    likesCount: number
}

const MyPosts = () => {
    const posts: PostType[] = [
        {id: "1", message: "Hello, how are you?", likesCount: 5},
        {id: "2", message: "I love world!", likesCount: 10},
        {id: "3", message: "It's my first post!", likesCount: 3},
        {id: "4", message: "Go to walk", likesCount: 49},
        {id: "5", message: "Mmmm, great!", likesCount: 0},
    ]

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
