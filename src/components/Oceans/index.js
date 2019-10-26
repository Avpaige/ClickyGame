import React from "react";
// import style from ""

function Oceans(props) {
    console.log(props)
    return (
        <div>
            <img onClick={props.myClick} src={props.image}/>
           
        </div>
    )
}

export default Oceans;