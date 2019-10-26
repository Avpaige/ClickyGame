import React from "react";
import style from "./oceans.css"

export default (props) => {
    return (
        <div
            onClick={() => props.thisWasClicked(props.id)}
        >
            <img
                className="img"
                alt={props.name}
                src={props.img}
            />
        </div>
    )
};
