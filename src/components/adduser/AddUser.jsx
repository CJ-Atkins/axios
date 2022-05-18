import React from 'react';
import './adduser.css';
import Axios from 'axios';

const AddUser = () => {
  return (
    <div>
      <form className='form'>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AddUser;
