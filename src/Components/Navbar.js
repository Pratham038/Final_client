import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiCart } from "react-icons/bi";
import { useCartContext } from "../context/cart_context";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";
const Navbar = () => {
  const { loginWithRedirect, logout,user,  isAuthenticated } = useAuth0();
  
  const { total_item } = useCartContext();
  
  
    const handleSubmit = async () => {
    try {
      const response = await axios.post('https://frefishserver.onrender.com/api/users', {
        username: user.name,
        userMail: user.email,
      });
  

    } catch (error) {
      console.error(error);
    }
  }
// useEffect(() => {
//   if (isAuthenticated) {
//     handleSubmit()
//   }
// }, [handleSubmit()])

useEffect(() => {
  if (isAuthenticated) {
    handleSubmit();
  }
}, [isAuthenticated]);

  return (
    <NavbarContainer>
      <div className="navbar-brand">
        <Link to="/">
          FRE-FISH
        </Link>
      </div>
      <div className="nav-rig">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/products">
          Products
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/about">
          About Us
        </Link>
        {isAuthenticated ? (<>
                  <Link className="nav-link" to="/profile">
                  Profile
                </Link>
                <Link className="nav-link" to="/userorders">
                  Orders
                </Link>
          <li className="nav-link">
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          </li>
          </>
        ) : (
          <li className="nav-link">
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>
        )}

        <Link className="nav-link" to="/cart">
          <div className="icon-container">
            <BiCart className="icon" />
            <span className="badge badge-warning" id="lblCartCount">
              {total_item}
              {console.log(total_item)}
            </span>
          </div>
        </Link>
      </div>
    </NavbarContainer>
  );
};
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  padding: 0.7rem 2rem;
  a{
    text-decoration: none;
    color: #fff;
  }
li{
  background-color: black;
  color: white;
}
  .badge {
    padding-left: 9px;
    padding-right: 9px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
  }
  .label-warning[href],
  .badge-warning[href] {
    background-color: #c67605;
  }
  #lblCartCount {
    font-size: 12px;
    background: #ff0000;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
    margin-left: -10px;
  }

  .nav-rig {
    gap: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon {
    font-size: 24px;
  }
  .navbar-brand {
    
    font-size: 2rem;
    font-style: none;
    color: #fff;
    font-weight: 700;
  }

  .nav-link {
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 8rem;
    height: 3rem;
    color: white;
    margin-left: 1rem;
  }
  button{
    background-color: #ff0000;
    border-radius: 7px;
    border: none;
    color: #fff;
  }
`;

export default Navbar;
