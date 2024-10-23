import { useState } from "react";
import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  const [isSidebarActive, setSidebarActive] = useState(true);
  return(
    <div className={`wrapper ${isSidebarActive ? '' : ' sidebarHidden'}`}>
   <Sidebar/>
   <Main setSidebarActive={setSidebarActive}/>
    </div>
  )
}