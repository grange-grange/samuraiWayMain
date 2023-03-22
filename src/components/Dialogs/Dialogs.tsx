import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Vasya'},
        {id: 5, name: 'Lena'},
        {id: 6, name: 'Yulya'}
    ]
    let messages = [
        {id: 1, message: "yo"},
        {id: 2, message: "hi"},
        {id: 3, message: "bye"}
    ]

    let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
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