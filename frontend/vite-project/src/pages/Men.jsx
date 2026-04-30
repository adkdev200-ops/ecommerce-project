import { useEffect, useState } from "react";
import API from "../utils/api";
import ProductCard from "../components/ProductCard";
import "../CSS/Men.css"

const Men = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/api/products/");
        
        
        const menProducts = res.data.filter(
          (item) => item.category === "male"
        );

        setProducts(menProducts);

      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="men-container">
      <h1>MEN Collections</h1>
      <div className="men-grid">
        {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
      </div>
    </div>
  );
};

export default Men;