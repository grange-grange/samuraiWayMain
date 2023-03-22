import React from 'react';
import s from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
    let posts = [
        {id: 1, message: "This is first post!", likesCount: 58},
        {id: 2, message: "What's up people?", likesCount: 11},
        {id: 3, message: "It's raining now...", likesCount: 12}
    ]

    let postsElements = posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

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