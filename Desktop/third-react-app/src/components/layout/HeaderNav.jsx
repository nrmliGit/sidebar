
import { useState } from 'react';
import Dropdown from './Dropdown'
import styles from './styles/headerNav.module.css'
const datas = [
    {name: 'Home'},
    {name: 'Link'},
]

export default function HeaderNav(){
    const [isOpened, setOpened] = useState(false);
    const handleOnDropdownActive = () => setOpened(state => !state)
    return(
        <nav>
            <ul className={styles.ul}>
            {datas.map((item, index)=>(
                    <li key={index}>{item.name}</li>
                ))}
                <li onClick={handleOnDropdownActive}>Dropdown <i className="fa-solid fa-chevron-down"></i></li>
            </ul>
        <Dropdown isOpened={isOpened}/>
        </nav>
    )
}