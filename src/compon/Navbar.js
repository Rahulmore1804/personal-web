import React from "react";
import "./Navbar.css";


function Navbar() {

  return (
    <div className="OP">
      <p className="textt">Divine Web Dev</p>

      <ul className="AP">
        <a className="AAP" href="home">
          {" "}
          HOME{" "}
        </a>

        <a className="AAP" href="contact">
          {" "}
          CONTACT{" "}
        </a>
        <a className="AAP" href="service">
          {" "}
          SERVICE{" "}
        </a>
        <a className="AAP" href="Work">
          {" "}
          WORK{" "}
        </a>
        
      </ul>
    </div>
  );
}
export default Navbar;
