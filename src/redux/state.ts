export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
}

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "This is first post!", likesCount: 58},
            {id: 2, message: "What's up people?", likesCount: 11},
            {id: 3, message: "It's raining now...", likesCount: 12}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Kolya'},
            {id: 3, name: 'Petya'},
            {id: 4, name: 'Vasya'},
            {id: 5, name: 'Lena'},
            {id: 6, name: 'Yulya'}
        ],
        messages: [
            {id: 1, message: "yo"},
            {id: 2, message: "hi"},
            {id: 3, message: "bye"}
        ]
    }
}

export default state;