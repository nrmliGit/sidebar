import HeaderNav from './HeaderNav'
import styles from './styles/header.module.css'

export default function Header({setSidebarActive}){
    const handleOnSidebarActive = () => setSidebarActive(state => !state)
    return(
        <header className={styles.header}>
            <button onClick={handleOnSidebarActive}>
                Toggle Menu
        </button>
        <HeaderNav/>
        </header>
    )
}