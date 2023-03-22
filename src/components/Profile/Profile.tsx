import React from 'react';
import s from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postType} from "../../index";


type ProfilePropsType = {
    posts: Array<postType>
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.posts}/>
        </div>
    );
};

export default Profile;