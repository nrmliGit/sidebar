import { Link, NavLink } from 'react-router-dom'
import styles from './styles/sidebar.module.css'
 const sidebarItems = [
  {
    text: 'Dashboard',
    href: '/',
  
  },
  {
    text: 'Shortcuts',
    href: '/shortcuts',
  },
  {
    text: 'Overview',
    href: '/overview',
  }, {
    text: 'Events',
    href: '/events',
  }
  , {
    text: 'Profile',
    href: '/profile',
  }
  , {
    text: 'Status',
    href: '/status',
  }
 ]
export default function Sidebar(){
    return(
        <aside className={styles.sidebar}>
          <div><p>Start Bootstrap</p></div>
         <div>
         <ul>
            {sidebarItems.map((item, index)=> (
              <li key={index}>
                <NavLink to={item.href}>
                {item.text}</NavLink>
                
              </li>
            ))}
          </ul></div> 
        </aside>
    )
}