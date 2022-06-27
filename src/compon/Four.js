import React from "react";
import Four4 from '../img/a7.jpg'
import "./Four.css"


function Four(){
function sendtodb(){
    alert(
"your msg has send"
    )
}
    return(<>
        <div className="q6" >
        <img className="q5"  src={Four4} alt="1d1"/>
        <div className="sendbox">
        <h1>SEND YOUR MESSAGE TO USE</h1>
            <input  placeholder="First Name"/><br/>
            <input  placeholder="Last Name"/><br/>
            <input placeholder="Your Mail-id"/><br/>
            <input placeholder="Your message"/><br/>
            <button onClick={sendtodb}> Send </button>
        </div>
        </div>
        </>
    )
}
export default Four;