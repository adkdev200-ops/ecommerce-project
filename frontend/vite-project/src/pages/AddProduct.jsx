import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    try {

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("image", formData.image);

      await API.post("/api/products/", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      alert("Product Added Successfully!");

      navigate("/"); // go to home after adding

    } catch (error) {
      console.log(error);
      alert("Error adding product");
    }
  };

  return (
    <div style={{ padding: "20px", 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    
    
    }} ><div style={{
        border:"2px solid black",
        padding:"20px",
        backgroundColor:"#e5eaf5",
        width:"500px"
    }}>
      <h1>Add Product</h1>

      <input name="title" placeholder="Title" onChange={handleChange} /><br/><br/>
      <textarea
  name="description"
  placeholder="Enter product description"
  rows="5"
  cols="30"
  onChange={handleChange}
/><br/><br/>
      <input name="price" type="number" placeholder="Price" onChange={handleChange} /><br/><br/>
      <input name="category" placeholder="Category (male/female/kid)" onChange={handleChange} /><br/><br/>
      <input name="image" type="file" onChange={handleChange} /><br/><br/>

      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddProduct;