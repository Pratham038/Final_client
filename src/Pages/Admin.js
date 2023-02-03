import React from "react";
import { useState, useEffect } from "react";
import ProductDetails from "../Components/ProductDetails";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Admin = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [reviews, setReviews] = useState("");
  const [stars, setStars] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [featured, setFeatured] = useState("");
  const [error, setError] = useState(null);
  const [colors, setColors] = useState([]);

  //fetcch
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };

    fetchProducts();
  }, []);

  const prductNewSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      image,
      colors,
      price,
      description,
      id,
      stock,
      reviews,
      stars,
      category,
      featured,
    };

    const response = await fetch("api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setPrice("");
      setDescription("");
      setCategory("");
      setFeatured("");
      setStock("");
      setId("");
      setReviews("");
      setStars("");
      setImage("");
      setError(null);
      alert("new product added", json);
      // console.log("new product added", json);
    }
  };
  const handleColorsChange = (event) => {
    setColors(event.target.value.split(","));
  };

  return (
    <>
    <Seperateproduct>
      <form onSubmit={prductNewSubmit}>
        <h3>ADD A new Product</h3>

        <label>Product ID :</label>

        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />

        <label>Product Name :</label>

        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label>Product Price :</label>
        <h6>value will be /100 .</h6>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <label>Product Description :</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>Product stock :</label>
        <input
          type="number"
          onChange={(e) => setStock(e.target.value)}
          value={stock}
        />

        <label>Product Reviews :</label>
        <input
          type="number"
          onChange={(e) => setReviews(e.target.value)}
          value={reviews}
        />

        <label>Product stars :</label>
        <input
          type="number"
          onChange={(e) => setStars(e.target.value)}
          value={stars}
        />

        <label>Product Advertise ? :</label>
        <h6>true ki false</h6>

        <input
          type="text"
          onChange={(e) => setFeatured(e.target.value)}
          value={featured}
        />

        <label>Product category :</label>

        <input
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />

        <label>Product Image link:</label>

        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        {/* TRY0 */}
        <div>
          <label htmlFor="colors">Size :</label>
          <input
            type="text"
            id="colors"
            name="colors"
            value={colors.join(",")}
            onChange={handleColorsChange}
          />
        </div>

        <button type="submit" onSubmit={prductNewSubmit}>
          Add Product
        </button>
        {error && <div className="error">{error}</div>}
      </form>
      </Seperateproduct>
      <div className="products">
        {products &&
          products.map((product) => (
            <>
             <NavLink to={`/editproduct/${product.id}`} >
              <ProductDetails key={product._id} product={product} />
              </NavLink>
            </>
          ))}
      </div>
      
    </>
  );
};

export default Admin;

const Seperateproduct = styled.div`
  background-color: aqua;
  border: 3px solid #333;
  margin: 2rem;
`;
