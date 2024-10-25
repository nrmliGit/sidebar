
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Layout from "./pages/Layout";
import Shortcuts from "./pages/Shortcuts";
import Events from "./pages/Events";
import Status from "./pages/Status";
import Profile from "./pages/Profile";

export default function App() {

  return(

  <Routes>
    <Route path="/"  element={<Layout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path="overview" element={<Overview/>}/>
    <Route path="shortcuts" element={<Shortcuts/>}/>
    <Route path="events" element={<Events/>}/>
    <Route path="status" element={<Status/>}/>
    <Route path="profile" element={<Profile/>}/>

    <Route path="*" element={<div>bele sey yoxdur</div>}/>
  </Route>
  
  


  </Routes>
  )
}