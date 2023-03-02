import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../helpers/FormatPrice";
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height:22rem;
  width:15rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 1.25rem;
  overflow: hidden;

  border: 1px solid #333;
`;

const Image = styled.img`
width:269px;
height:187px;
  object-fit: cover;
`;

const Name = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  text-align: center;
`;

const Category = styled.p`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  color: gray;
`;

const Price = styled.p`
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;

  return (
    <>
    
      <Link to={`/singleproduct/${id}`}>
        <Card>
          <Image src={image} alt={name} />
          <Name>{name}</Name>
          <Category>Category: {category}</Category>
          <Price>Price: {<FormatPrice price={price}/>}</Price>
        </Card>
      </Link>
      
    </>
  );
};

export default Product;