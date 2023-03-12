import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
}

const Dialog = (props: DialogPropsType) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={"Dima"} id={"1"}/>
                <Dialog name={"Kolya"} id={"2"}/>
                <Dialog name={"Petya"} id={"3"}/>
                <Dialog name={"Vasya"} id={"4"}/>
                <Dialog name={"Lena"} id={"5"}/>
                <Dialog name={"Yulia"} id={"6"}/>
            </div>
            <div className={s.messages}>
                <Message message={"yo"} />
                <Message message={"hi"} />
                <Message message={"bye"} />
            </div>
        </div>
    );
};

export default Dialogs;