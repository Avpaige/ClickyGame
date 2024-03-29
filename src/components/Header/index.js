import React from "react";
import "./header.css"
import dice from "./dice.png"


function Header(props) {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <img src={dice} width="200" height="100" />
                </div>
                <div className="col-8">
                    <h1>Ocean's Guess</h1>
                    <h5>Pick your heist teammates but don't pick the same person more than once or Terry Benedict is going to bust you!</h5>
                </div>
                <div className="scoreBoard col-2">
                    <div className="score row"> <h5>Current Score: {props.score} </h5></div>
                    <div className="highScore row"><h5>High Score: {props.highScore}</h5></div>
                </div>
            </div>
        </div >
    )
}

export default Header;