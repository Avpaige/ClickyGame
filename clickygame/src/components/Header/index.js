import React from "react";



function Header(props) {
    console.log(props)
    return (
        <nav>
            Ocean's Guess
            Click an image to begin and earn points! But click more than once and this heist is blown!
            Score: {`${props.score}`}   |     High Score:  {`${props.highScore}`}
        </nav>
    )
}

export default Header;