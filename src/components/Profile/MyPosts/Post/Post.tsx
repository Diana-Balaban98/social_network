import React from "react";
import s from "./Post.module.css";


const Post = () => {
    return (
        <div className={s.wrapperPost}>
            <img src="https://avatanplus.com/files/resources/original/5cf96bb565c1116b2e4cbca9.png"
                 alt="img"/>
            <a>Hey, why nobody love me?</a>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;
