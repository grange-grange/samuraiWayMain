import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: number
    id?: number
}

const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src={require("./avapost.jpg")}/>
            {props.message}
            <div>
                <span>{props.likesCount} like</span>
            </div>
        </div>
    );
};

export default Post;