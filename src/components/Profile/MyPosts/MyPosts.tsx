import React from "react";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <textarea>your news...</textarea>
            <button>Send</button>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts;
