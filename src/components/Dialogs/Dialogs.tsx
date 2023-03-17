import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

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


    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Vasya'},
        {id: 5, name: 'Lena'},
        {id: 6, name: 'Yulia'}
    ]

    let messagesData = [
        {id: 1, message: "yo"},
        {id: 2, message: "hi"},
        {id: 3, message: "bye"}
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
};

export default Dialogs;