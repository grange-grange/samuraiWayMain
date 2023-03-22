import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";
import {postType} from "../../../index";

type PostsPropsType ={
    posts: Array<postType>
}

const Posts: React.FC<PostsPropsType> = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                New post
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default Posts;