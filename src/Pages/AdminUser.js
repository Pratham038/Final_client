import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AdminNavbar from "../Components/AdminNavbar";

const AdminUser = () => {
  const [users, setUsers] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://frefishserver.onrender.com/api/users");
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setUsers(json);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (users) {
      const filtered = users.filter((user) =>
        user.username.toLowerCase().includes(searchInput.toLowerCase()) ||
        user.userMail.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchInput, users]);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <AdminNavbar />
      <Wrapper>
        <div className="search-bar">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchInput}
            placeholder="Search by username or email"
          />
        </div>
        <div className="orders">
          {filteredUsers &&
            filteredUsers.map((user) => (
              <div key={user.id} className="orders">
                <p>Username : {user.username}</p>
                <p>User Mail :{user.userMail}</p>
                <p>ADRDESS : {user.useraddress}</p>
              </div>
            ))}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .search-bar {
    display: flex;
    margin-bottom: 1rem;
    input {
      width: 100%;
    }
  }
  .orders {
    border: 3px solid #333;
  }
`;

export default AdminUser;
