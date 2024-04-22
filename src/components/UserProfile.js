import React from 'react';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);
  const handleClick = () => {
    setIsOnline(!isOnline);
  };
  return (
    <>
      <div>User is {isOnline ? 'En Ligne' : 'Hors-Ligne'}</div>

      <button onClick={handleClick}>click to change user status </button>
    </>
  );
}

export default UserProfile;
