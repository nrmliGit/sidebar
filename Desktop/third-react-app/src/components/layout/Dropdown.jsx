
import styles from './styles/dropdown.module.css'
const datas = [
  {
    name:'Action'
  },
  {
    name:'Another action'
  },
  {
    name:'Something else here'
  }

]
export default function Dropdown({isOpened}){

  return(
    <div className={`${styles.dropdown} ${isOpened ? styles.opened : ''}`}>
      <ul>
        {datas.map((item)=>(
          <li>{item.name}</li>
        ))}
        
      </ul>
    </div>
  )
}