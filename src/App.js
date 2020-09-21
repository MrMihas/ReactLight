import React from 'react';
import logo from './logo.svg';
import './App.css';
import News from "./News/News";



const myNews = [
    {
        id: 1,
        author: "John Cat",
        text: "superstar"
    },
    {
        id: 2,
        author: "Matt",
        text: "superplanet"
    },
    {
        id: 3,
        author: "Matthew",
        text: "superB"
    }
];

function App() {
    return (

        <React.Fragment>
			<h3>News</h3>
            <News data={myNews}/>
        </React.Fragment>
    );
}

export default App;
