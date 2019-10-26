import React from "react";

function Oceans(props) {
    console.log(props)
    return (
        <div>
            <img onClick={props.myClick} src={props.image}/>

        </div>
    )
}

export default Oceans;