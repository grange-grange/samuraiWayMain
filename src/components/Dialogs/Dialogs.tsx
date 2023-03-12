import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={"/dialogs/1"}>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/2"}>Kolya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/3"}>Petya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/4"}>Vasya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/5"}>Lena</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dialogs/6"}>Yulia</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>yo</div>
                <div className={s.message}>hi</div>
                <div className={s.message}>bye</div>
            </div>
        </div>
    );
};

export default Dialogs;