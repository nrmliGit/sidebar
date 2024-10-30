import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../pages/styles2/product.module.css";
export default function Product() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
  };
  useEffect(() => {
    getProduct().then((data) => setProduct(data));
  }, [id]);
  return (
    <div className={styles.product}>
      {product ? (
        <div>
          <img src={product.image} alt="" />
          <p>{product.title}</p>
        </div>
      ) : (
        <p>Lopading...</p>
      )}
    </div>
  );
}
