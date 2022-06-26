import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineContacts } from "react-icons/ai";
import { GrServices} from "react-icons/gr";
import { GrUserWorker } from "react-icons/gr";


export const Sidebardata = [
    {title:'Home',
path:'/',
icon : <BiHomeAlt/>,
cName : 'nav-text'
},
    {title:'contact',
path:'/contact',
icon : <AiOutlineContacts/>,
cName : 'nav-text'
},
    {title:'SERVICE',
path:'/service',
icon : <GrServices/>,
cName : 'nav-text'
},
    {title:'Work',
path:'/work',
icon : <GrUserWorker/>,
cName : 'nav-text'
},
]