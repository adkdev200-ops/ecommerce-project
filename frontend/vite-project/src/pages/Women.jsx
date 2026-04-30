import ProductCard from "../components/ProductCard";
import saari from "../assets/saari.jpg";
const Women = () => {

  const product = {
    id: 1,
    name: "Yellow Saari",
    price: 1500,
    image: saari
  };

  return (
    <div>
      
      <ProductCard product={product} />
    </div>
  );
};

export default Women;