import ProductCard from "../components/ProductCard";
import nike from "../assets/nike.webp";
import cap from "../assets/cap.webp";
import jacket from "../assets/jacket.webp";
import tshirt from "../assets/tshirt.webp";
import "../CSS/Men.css";

const Men = () => {

  const products = [
    { id: 1, name: "Nike Shoes", price: 2500, image: nike },
    { id: 2, name: "T-Shirt", price: 1200, image: tshirt},
    { id: 3, name: "Jacket", price: 3500, image: jacket },
    { id: 4, name: "Cap", price: 800, image: cap }
  ];

  return (
    <div className="men-container">
      <h1>Men Collection</h1>

      <div className="men-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Men;