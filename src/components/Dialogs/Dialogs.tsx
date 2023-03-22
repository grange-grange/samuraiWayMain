import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {dialogType, messageType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<dialogType>
    messages: Array<messageType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map((m) => <Message message={m.message}/>)

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