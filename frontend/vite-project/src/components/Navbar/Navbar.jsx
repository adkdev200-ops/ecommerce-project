import React, { useState, useContext } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const [menu, setMenu] = useState("home")
  const navigate = useNavigate()

  const { token, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();           
    navigate("/login");
  }

  return (
    <div className='navbar'>

      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Shopify</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={()=>setMenu("home")}>
          <Link to="/">Home</Link>
          {menu==="home" && <hr/>}
        </li>

        <li onClick={()=>setMenu("mens")}>
          <Link to="/mens">Men</Link>
          {menu==="mens" && <hr/>}
        </li>

        <li onClick={()=>setMenu("womens")}>
          <Link to="/womens">Women</Link>
          {menu==="womens" && <hr/>}
        </li>

        <li onClick={()=>setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {menu==="kids" && <hr/>}
        </li>
        <li>
  <Link to="/add-product">Add Product</Link>
</li>
      </ul>

      <div className="nav-login-cart">

        {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="" height="40px" />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>

    </div>
  )
}

export default Navbar;