import { useEffect, useState } from "react";
import API from "../utils/api";
import ProductCard from "../components/ProductCard";
import "../CSS/kids.css"

const Kids = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/api/products/");
        
        
        const kidProducts = res.data.filter(
          (item) => item.category === "kid"
        );

        setProducts(kidProducts);

      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="kid-container">
      <h1>kids Collections</h1>
      <div className="kid-grid">
        {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
      </div>
    </div>
  );
};

export default Kids;