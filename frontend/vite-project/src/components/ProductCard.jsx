import"../CSS/ProductCardCss.css";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">

      <div className="img">
        <img src={product.image} alt="" />
      </div>


      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Rs. {product.price}</p>

      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;