import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import lic from "../images/licious.svg";

const Nav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;

  .links {
    display: flex;
  }
  a {
    margin: 0rem 3rem 0rem 3rem;
    font-size: 1.4em;
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    transition: 0.4s ease;

    &:hover {
      background-color: yellow;
      border-radius: 7px;
      text-decoration: underline;
      color: black;
    }
  }
  .navbar-brand {  
    font-size: 2rem;
    font-style: none;
    color: #fff;
    font-weight: 700;
  }
`;


const AdminNavbar = () => {
  return (
    <Nav>
      
      <div className="navbar-brand">
        <Link to="/addOrd">
          FRE-FISH
        </Link>
      </div>
      
      <div className="links">
        <Link to="/addPro">Products</Link>

        <Link to="/addOrd">Orders</Link>

        <Link to="/admUsers">Users</Link>
      </div>
    </Nav>
  );
};

export default AdminNavbar;
