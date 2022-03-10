import React, { Component } from "react";
import "./index.css"
import "./photo-viewer.css"
import $ from "jquery"

export default class App extends Component {
    render() {
        return <div>
            <div id="photo-viewer"></div>
            <div id="thumbnails"></div>
        </div>
    }
}