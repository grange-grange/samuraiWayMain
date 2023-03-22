import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type postType = {
    id: number
    message: string
    likesCount: number
}
let posts: Array<postType> = [
    {id: 1, message: "This is first post!", likesCount: 58},
    {id: 2, message: "What's up people?", likesCount: 11},
    {id: 3, message: "It's raining now...", likesCount: 12}
]


export type dialogType = {
    id: number
    name: string
}
let dialogs: Array<dialogType> = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Kolya'},
    {id: 3, name: 'Petya'},
    {id: 4, name: 'Vasya'},
    {id: 5, name: 'Lena'},
    {id: 6, name: 'Yulya'}
]

export type messageType = {
    id: number
    message: string
}
let messages: Array<messageType> = [
    {id: 1, message: "yo"},
    {id: 2, message: "hi"},
    {id: 3, message: "bye"}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);