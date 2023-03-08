import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const [userAddress, setUserAddress] = useState('');
  const [updatedUser, setUpdatedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isUpdatingAddress, setIsUpdatingAddress] = useState(false);
  const [authenticatedUserAddress, setAuthenticatedUserAddress] = useState('');
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://frefishserver.onrender.com/api/users');
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setUsers(json);
      }
    };

    fetchUsers();
  }, []);
  
  if (!isAuthenticated) {
    return <p>Please log in to view your profile.</p>;
  }
  const handleAddUserAndAddress = async (e) => {
    e.preventDefault();
  
    // Check if user already exists in the database
    const existingUser = users.find((u) => u.userMail === user.email);
  
    if (existingUser) {
      // If user exists, update the address
      setIsUpdatingAddress(true);
  
      try {
        const response = await axios.patch(`https://frefishserver.onrender.com/api/users/${user.email}`, {
          useraddress: userAddress,
        });
  
        setUpdatedUser(response.data);
        alert('Address updated successfully!');
      } catch (error) {
        console.error(error);
        alert('Unable to update address. Please try again later.');
      } finally {
        setIsUpdatingAddress(false);
      }
    } else {
      // If user does not exist, add the user and address
      try {
        const response = await axios.post('https://frefishserver.onrender.com/api/users', {
          username: user.name,
          userMail: user.email,
          useraddress: userAddress,
        });
  
        setUpdatedUser(response.data);
        alert('User and address added successfully!');
      } catch (error) {
        console.error(error);
        alert('Unable to add user and address. Please try again later.');
      }
    }
  };
  
  return (
    <>
      <form onSubmit={handleAddUserAndAddress}>
        <label>
          Address:
          <input
            type="text"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
          />
        </label>
        <button type="submit" disabled={isUpdatingAddress}>
          {isUpdatingAddress ? 'Updating address...' : 'Update Address'}
        </button>
      </form>
      <h1>My Profile</h1>
      <p>Name: {updatedUser?.username || user.name}</p>
      <p>Email: {updatedUser?.userMail || user.email}</p>
      <p>Address: {updatedUser?.useraddress || ''}</p>

    </>
  );
}

export default Profile;
