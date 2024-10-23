import styles from './styles/sidebar.module.css'
 
export default function Sidebar(){
    return(
        <aside className={styles.sidebar}>
          <div><p>Start Bootstrap</p></div>
         <div>
         <ul>
            <li>Dashboard</li>
            <li>Shortcuts</li>
            <li>Overview</li>
            <li>Events</li>
            <li>Profile</li>
            <li>Status</li>
          </ul></div> 
        </aside>
    )
}