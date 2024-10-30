import { useNavigate } from "react-router-dom";
import styles from "./product.module.css";
export default function ProductItem({ product }) {
  const navigate = useNavigate();
  return (
    <article className={styles.product}>
      <div>
        <img src={product.image} />
      </div>
      <div>
        <p>{product.title}</p>
        <button onClick={() => navigate(`/products/${product.id}`)}>
          More
        </button>
      </div>
    </article>
  );
}
