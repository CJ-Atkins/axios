import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import User from './components/user/User';
import AddUser from './components/adduser/AddUser';

function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   Axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => {
  //       console.log(res.data);
  //       setUsers(res.data);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // }, []);

  const fetchData = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const clearData = () => {
    setUsers([]);
  };

  return (
    <div className='App'>
      AXIOS
      <button onClick={fetchData} className='btn'>
        Retrieve Users
      </button>
      <button onClick={clearData} className='btn'>
        Clear Users
      </button>
      <AddUser />
      <div className='grid'>
        {users.map((data, index) => (
          <User
            key={data.id}
            name={data.name}
            username={data.username}
            email={data.email}
            company={data.company.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
