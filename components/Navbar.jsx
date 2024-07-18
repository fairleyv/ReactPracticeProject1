import React from "react";
import reactLogo from '../src/assets/react.svg';

export default function Navbar () {
    return (<>
        <container className="navbar">
            <div className="logo">
                <img src={reactLogo}/>
                <h3>React Facts</h3>
            </div>
            <div className="className=projectName">
                <h4>React Course - Project 1</h4>
            </div>
        </container>
    </>)
}