import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './layout/Header';




export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            currentSong: {},
            isPlaying: false,
            currentTime: 0,
            duration: 0,
        }
    }

    render() {
        return (<h1> Testing React Code </h1>);
    }
}


const appDiv = document.getElementById("app");
render(<App />, appDiv);