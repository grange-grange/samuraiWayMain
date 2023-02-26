import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    )
}

function Header() {
    return (
        <div>
            <a>Home </a>
            <a>News </a>
            <a>Feed </a>
            <a>Messages </a>
        </div>
    )
}

function Technologies() {
    return (
        <div className="App">
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}

export default App;
