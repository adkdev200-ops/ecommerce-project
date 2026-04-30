import { useEffect, useState } from "react";
import API from "../utils/api";
import ProductCard from "../components/ProductCard";
import "../CSS/Women.css"

const Women = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("/api/products/");
        
        
        const womenProducts = res.data.filter(
          (item) => item.category === "female"
        );

        setProducts(womenProducts);

      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="women-container">
      <h1>Women Collections</h1>
      <div className="women-grid">
        {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
      </div>
    </div>
  );
};

export default Women;