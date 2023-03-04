import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>
            my posts
            <div>
                New post
                <input/>
                <button>Post</button>
                <button>Cancel</button>
            </div>
            <div className={s.posts}>
                <Post message={"It's raining now..."} likes={"5"}/>
                <Post message={"What's up people?"} likes={"2"}/>
                <Post message={"This is first post!"} likes={"13"}/>

            </div>
        </div>
    );
};

export default Posts;