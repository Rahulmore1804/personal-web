import React from "react";
import {FiFacebook} from "react-icons/fi"
import {AiFillGithub} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {SiGmail} from "react-icons/si"
import {FaLinkedinIn} from "react-icons/fa"
import "./Footer.css"

function Footer(){
    return(   
    <footer className="A1">
    <p className="a4">&copy; Divine Web Developer</p>
      <break></break>
      <div className="all-logo">
      <ul>
     <li> <a     href ="http://www.twitter.com"><FiFacebook/></a></li>
     <li> <a     href ="http://www.twitter.com"><AiFillGithub/></a></li>
     <li> <a    href ="http://www.twitter.com"><SiGmail/></a></li>
     <li> <a     href ="http://www.twitter.com"> <FaLinkedinIn/> </a></li>
     <li> <a     href ="http://www.google.com"><FiTwitter/></a></li>
</ul>
</div>
    </footer>
)}

export default Footer;