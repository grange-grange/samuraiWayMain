import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
    let postsData = [
        {id: 1, message: "This is first post!", likesCount: 58},
        {id: 2, message: "What's up people?", likesCount: 11},
        {id: 3, message: "It's raining now...", likesCount: 12}
    ]

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
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>

            </div>
        </div>
    );
};

export default Posts;