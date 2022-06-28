import React from "react";
import Three3 from '../img/a3.jpg'
import "./Three.css"
import Card from "./Card";
import data from "./data";

function Three(){

    function thirdparty(ab){
        return(
        <Card 
            key = {ab.key}
            name = {ab.name}
            title = {ab.title}
            image = {ab.image}
        />
    )}
    return(
        <div className="three">
        <img  className="q3" src={Three3} alt="1d1"/>
        <h1 className="tit">My Work</h1>
        <div className="ab">
        
        {data.map(thirdparty)}
        </div> </div>
    )
}
export default Three;





