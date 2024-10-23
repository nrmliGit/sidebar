import Header from "./Header";

export default function Main({setSidebarActive}){
    return(
        <div className="main-wrapper">
            <Header setSidebarActive = {setSidebarActive}/>
            <main className="main">
               <h1>Simple Sidebar</h1>
               <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
               <p>Make sure to keep all page content within the <span>#page-content-wrapper</span> . The top navbar is optional, and just for demonstration. Just create an element with the <span>#sidebarToggle</span> ID which will toggle the menu when clicked.</p>
            </main>
            
        </div>

    )
}