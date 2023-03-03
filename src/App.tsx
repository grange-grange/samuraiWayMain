import React from 'react';
import './App.css';


function App() {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src={require("./logo.png")}/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    <img src={require("./profile_bg.jpg")}/>
                </div>
                <div>
                    ava+descrption
                </div>
                <div>
                    my posts
                </div>
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    )
}

export default App;
