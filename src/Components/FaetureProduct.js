import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import { useProductContext } from '../context/productContext'

const Cord = styled.div`
    background-color: black;

  display: flex;
  justify-content: space-around;
  padding: 1rem 0rem 1rem 0rem;
`;
const Wrapper = styled.div`
    background-color: black;


h1{
    text-align: center;
    background-color: black;
  }

  h3{
    text-align: center;
  }
hr{
  border: 3px solid #fff;
  width: 80%;
  margin: 0% 10%;

}
`



const FaetureProduct = () => {
    
  const { isLoading , featureProducts} = useProductContext();
    // console.log(featureProducts);
    
    if (isLoading){
        return <div style={{backgroundColor : "blue"}}>LOADING </div>
    }

  return (<Wrapper>
    
    <h1 style={{marginTop:"1rem"}}>Our New Featured Products..</h1>
      <h3>Must try ...</h3>
      <hr style={{  border: "3px solid #fff",
  width: "80%",
  margin: "0% 10%;"}}/>
    <Cord>
      
     {featureProducts.map((curElem) =>{
      return <Product key={curElem.id} {...curElem} />;
     })}
    </Cord>
   </Wrapper>)
}

export default FaetureProduct