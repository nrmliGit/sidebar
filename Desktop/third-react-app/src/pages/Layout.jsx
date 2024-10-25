import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Main from "../components/layout/Main";

export  default function Layout(){
    const [isSidebarActive, setSidebarActive] = useState(true);
    return(
    <>
    <div className={`wrapper ${isSidebarActive ? '' : ' sidebarHidden'}`}>
    <Sidebar/>
    <Main setSidebarActive={setSidebarActive}/>
     </div></>
    )
}