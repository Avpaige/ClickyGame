import React from "react";
import style from "./oceans.css"

export default (props) => {
    return (
        <div
            onClick={() => props.setClicked(props.id)}
        >
            <img
                className="img"
                alt={props.name}
                src={props.img}
            />
        </div>
    )
};



// function Oceans(props) {
//     console.log(props)
//     return (
//         <div>
//             <img onClick={props.myClick} src={props.image}/>
//                    </div>
//     )
// }

// export default Oceans;