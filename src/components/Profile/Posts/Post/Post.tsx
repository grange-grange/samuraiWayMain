import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likes: string
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src={require("./avapost.jpg")}/>
            {props.message}
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
    );
};

export default Post;