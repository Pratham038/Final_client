import React from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { AiFillDelete} from "react-icons/ai";
import FormatPrice from "../helpers/FormatPrice"
const ProductDetails = ({ product }) => {
  return (
    <>
      <Seperateproduct>
        <div className="img">
          <img src={product.image} alt={product.name}></img>
        </div>
        <div className="pro-info">
          <h6>ID : {product.id}</h6>
          <h6>Name : {product.name}</h6>
          <h6>price : <FormatPrice price={product.price} /></h6>
          <h6>description : {product.description}</h6>
          <h6>Stock : {product.stock}</h6>
          <h6>Reviews : {product.reviews}</h6>
          <h6>stars : {product.stars}</h6>
          <h6>category : {product.category}</h6>
          <h6>Advertised : {product.featured?"Yes":"No"}</h6>
        </div>
      </Seperateproduct>
    </>

  );
};

export default ProductDetails;

const Seperateproduct = styled.div`
  background-color: #333;
  border: 3px solid #333;
  margin: 1rem 2rem;
  display: flex;
  min-width: 50rem;
  padding: 1rem;

  img {
    width: 20rem;
    height: 15rem;
    border-radius: 2rem;
  }
  .pro-info {
    padding-left: 2rem;
  }
`;
