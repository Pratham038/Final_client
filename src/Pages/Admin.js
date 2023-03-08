import React from "react";
import { useState, useEffect } from "react";
import ProductDetails from "../Components/ProductDetails";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Components/AddToCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNavbar from "../Components/AdminNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
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
  const [featured, setFeatured] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  //fetcch
  const [products, setProducts] = useState(null);

  const prductNewSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      image,
      quantity,
      price,
      description,
      id,
      stock,
      reviews,
      stars,
      category,
      featured,
    };

    const response = await fetch(
      "https://frefishserver.onrender.com/api/products",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setPrice("");
      setDescription("");
      setCategory("");
      setFeatured(true);
      setStock("");
      setId("");
      setReviews("");
      setStars("");
      setImage("");
      setError(null);
      // console.log("new product added", json);
      toast.success("Product Added💕", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-message",
      });
    }
    if (!response.ok) {
      toast.error("Product not Added", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-message",
      });
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://frefishserver.onrender.com/api/products"
      );
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };

    fetchProducts();
  }, []);

  const handleColorsChange = (event) => {
    setQuantity(event.target.value.split(","));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://frefishserver.onrender.com/api/products/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          id: id,
        },
      })
      .then((resp) => {
        console.log(resp.message);
        alert("PRODUCT DELETED ❌");
        navigate("/admhome");
      })
      .catch((err) => console.error);
  };
  const filteredProducts = products?.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  return (
    <>
      <AdminNavbar />
      <Wrapper>
        <Seperateproduct>
          <form onSubmit={prductNewSubmit}>
            <h3>ADD A new Product</h3>
            <input
              placeholder="Product ID"
              type="text"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
            <input
              placeholder="Product Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              placeholder="Product Price"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <input
              placeholder="Product Description"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <input
              placeholder="Product stock"
              type="number"
              onChange={(e) => setStock(e.target.value)}
              value={stock}
            />
            <input
              placeholder="Product Reviews"
              type="number"
              onChange={(e) => setReviews(e.target.value)}
              value={reviews}
            />
            <input
              placeholder="Product stars"
              type="number"
              onChange={(e) => setStars(e.target.value)}
              value={stars}
              max={5}
            />
            Advertise ?? :
            <select
              onChange={(e) => setFeatured(e.target.value)}
              value={featured}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <input
              placeholder="Product category"
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
            <input
              placeholder="Product Image link"
              type="text"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            {/* TRY0 */}
            <div>
              <input
                placeholder="Size"
                type="text"
                id="quantity"
                name="quantity"
                value={quantity.join(",")}
                onChange={handleColorsChange}
              />
            </div>
            <Button type="submit" onSubmit={prductNewSubmit}>
              Add Product
            </Button>
            {/* {error && <div className="error">{error}</div>} */}
          </form>
        </Seperateproduct>

        <div className="products">
        <input
      type="text"
      placeholder="Search products"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />

            {filteredProducts &&
        filteredProducts.map((product) => (
          <Crad>
            <NavLink to={`/editproduct/${product.id}`}>
              <ProductDetails key={product._id} product={product} />
            </NavLink>
            <Button onClick={() => handleDelete(product.id)}>
              <AiFillDelete /> DELETE
            </Button>
          </Crad>
        ))}
        </div>
{/* <div className="products">
          {products &&
            products.map((product) => (
              <Crad>
                <NavLink to={`/editproduct/${product.id}`}>
                  <ProductDetails key={product._id} product={product} />
                </NavLink>
                <Button
                  onClick={() => {
                    handleDelete(product.id);
                  }}
                >
                  <AiFillDelete /> DELETE
                </Button>
              </Crad>
            ))}
        </div>
         */}
      </Wrapper>
    </>
  );
};

export default Admin;
const Crad = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  background-color: black;
  text-decoration: none;
  a {
    text-decoration: none;
    color: #fff;
  }
  .products {
    width: 100%;
    background-color: black;
  }
`;

const Seperateproduct = styled.div`
  width: 30%;
  background-color: black;
  color: #fff;
  margin: 0 1rem;
  padding: 1rem 0rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    margin: 0.5rem;
  }
`;
