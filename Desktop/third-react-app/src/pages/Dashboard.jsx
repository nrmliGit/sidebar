import ProductGrid from "../components/product/ProductGrid"
import styles from "../pages/styles2/dashboard.module.css"
export default function Dashboard(){
    return(
      <main className={styles.main}>
        <ProductGrid/>
      </main>
    )
}