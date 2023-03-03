import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.profile__img}>
                <img src={require("./profile_bg.jpg")}/>
            </div>
            <div>
                ava+descrption
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;