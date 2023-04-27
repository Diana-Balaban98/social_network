import React from "react";
import s from "./Post.module.css";


type PostPropsType = {
    message: string,
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.wrapperPost}>
            <img src="https://avatanplus.com/files/resources/original/5cf96bb565c1116b2e4cbca9.png"
                 alt="img"/>
            <a>{props.message}</a>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
