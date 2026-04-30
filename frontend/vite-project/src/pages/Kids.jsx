import ProductCard from "../components/ProductCard";
import gun from "../assets/gun.jpg";
const Kids = () => {

  const product = {
    id: 1,
    name: "Gun toy",
    price: 200,
    image: gun
  };

  return (
    <div>
      
      <ProductCard product={product} />
    </div>
  );
};

export default Kids;