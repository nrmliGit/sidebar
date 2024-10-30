import { useEffect } from "react";
import styles from "./product.module.css";
import ProductItem from "./ProductItem";
import { useState } from "react";
export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  };
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <section className={styles.products}>
      {products.length ? (
        products.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))
      ) : (
        <p>data is empty</p>
      )}
    </section>
  );
}
