import React from 'react';
import s from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.profile__img}>
                <img src={require("./profile_bg.jpg")}/>
            </div>
            <div>
                ava+description
            </div>
            <Posts />
        </div>
    );
};

export default Profile;