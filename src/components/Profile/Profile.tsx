import React from 'react';
import s from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export type postType = {
    id: number
    message: string
    likesCount: number
}
let posts: Array<postType> = [
    {id: 1, message: "This is first post!", likesCount: 58},
    {id: 2, message: "What's up people?", likesCount: 11},
    {id: 3, message: "It's raining now...", likesCount: 12}
]

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={posts}/>
        </div>
    );
};

export default Profile;