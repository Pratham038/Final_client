import React from "react";
import styled from "styled-components";
import CartAmountToggle from "../Components/CartAmountToggle";
import FaetureProduct from "../Components/FaetureProduct";
import fishing from "../images/Fishing-amico.svg";
import kebab from "../images/PNG/kebab.png";
import shrimp from "../images/PNG/DrawKit Vector Illustration Food & Culture (10).png";
import eggrice from "../images/PNG/koegg.png";
import naru from "../images/PNG/naru.png";
import sch from "../images/PNG/schz.png";
import momo from "../images/PNG/momo.png";

const HomePage = styled.nav`
  background-color: #333;
  color: #fff;
  hr{
  border: 3px solid black;
  background-color: black;
  width: 80%;
  margin: 0% 10%;

}
  h2{
    text-align: center;
  }
  .main {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    place-items: center;
    grid-column-gap: 2rem;
  }
  .wording {
    padding-left: 6rem;
  }
  .fishimg {
    height: 40rem;
    width: 40rem;
  }

  .parent {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    padding-left: 2rem ;

    .kid{
      padding: 1rem ;
    
    }
    img{
      border-radius: 7px;
      height:100%;
      width:90%;
    }
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .div4 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div5 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .div6 {
    grid-area: 2 / 3 / 3 / 4;
  }
  a{
    text-decoration: none;
  }
`;

const Home = () => {
  return (
    <>
      <HomePage>
        <div className="main">
          <div className="wording">
            <h2>Lorem Ipsum ....</h2>
            <h4>
              Irure sint veniam labore quis aliquip ad eiusmod ad. Culpa id
              excepteur cillum culpa amet Lorem Lorem. Ea do id proident
              reprehenderit ut non incididunt. Aute et ex do eiusmod irure
              voluptate culpa elit ullamco laboris enim pariatur in eu. Aliqua
              est quis Lorem cupidatat irure labore commodo esse aliquip elit ad
              Lorem mollit.
            </h4>
          </div>
          <div className="image">
            <img className="fishimg" src={fishing} alt="dv" />
          </div>
        </div>
        <FaetureProduct />
        <h2 style={{marginTop:"2rem" }}>....Our Specialities....</h2>
        <hr style={{ marginTop:"2rem",marginBottom:"2rem"}}/>
        <div class="parent">
          <div class="div1 kid">
            <img src={momo} alt="dfdfs" />{" "}
          </div>
          <div class="div2 kid">
            <img src={kebab} alt="dfdfs" />
          </div>
          <div class="div3 kid">
            <img src={shrimp} alt="dfdfs" />{" "}
          </div>
          <div class="div4 kid">
            <img src={eggrice} alt="dfdfs" />{" "}
          </div>
          <div class="div5 kid">
            <img src={naru} alt="dfdfs" />{" "}
          </div>
          <div class="div6 kid">
            <img src={sch} alt="dfdfs" />
          </div>
        </div>
        <hr style={{marginTop:"2rem" , width:"100%" , marginLeft:"0"}}/>
      </HomePage>
      
    </>
  );
};

export default Home;
