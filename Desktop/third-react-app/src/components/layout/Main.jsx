import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Main({setSidebarActive}){
    return(
        <div className="main-wrapper">
            <Header setSidebarActive = {setSidebarActive}/>
            <main className="main">
              
            <Outlet/>
            </main>
            
        </div>

    )
}