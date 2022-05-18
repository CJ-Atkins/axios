import React from 'react';
import './user.css';

const User = ({ name, username, email, company }) => {
  return (
    <div className='user-div'>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <p>{company}</p>
    </div>
  );
};

export default User;
