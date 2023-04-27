import React from "react";
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <textarea>your news...</textarea>
            <button>Send</button>
            <Post message="Hello, how are you?" likesCount={5}/>
            <Post message="I love world!" likesCount={10}/>
            <Post message="It's my firt post!" likesCount={15}/>
        </div>
    )
}

export default MyPosts;
