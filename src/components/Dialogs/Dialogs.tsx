import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Kolya
                </div>
                <div className={s.dialog}>
                    Petya
                </div>
                <div className={s.dialog}>
                    Vasya
                </div>
                <div className={s.dialog}>
                    Lena
                </div>
                <div className={s.dialog}>
                    Yulia
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