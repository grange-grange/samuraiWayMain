import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {message} from "antd";

type DialogPropsType = {
    name: string
    id: number
}

const Dialog: React.FC<DialogPropsType> = (props) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
    id?: number
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {


    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Vasya'},
        {id: 5, name: 'Lena'},
        {id: 6, name: 'Yulia'}
    ]
    let messages = [
        {id: 1, message: "yo"},
        {id: 2, message: "hi"},
        {id: 3, message: "bye"}
    ]

    let dialogsElements = dialogs.map((d) => <Dialog name={d.name} id={d.id}/>)
    let messagesElements = messages.map((m) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;