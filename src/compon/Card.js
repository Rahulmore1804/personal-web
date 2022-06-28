import React from "react";
import "./Three.css"

function Card(props){
    return(
        <div className="card">
            <p>{props.name}</p>
            <p>{props.title}</p>
            {/* <p>{props.image}</p> */}
            <img className="imm" src={props.image} alt ="df" /> 
        </div>
    )
}

export default Card;