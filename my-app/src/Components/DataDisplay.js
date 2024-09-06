import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/userdata')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.cust_id}>
              <td>{user.cust_id}</td>
              <td>{user.Fullname}</td>
              <td>{user.Username}</td>
              <td>{user.Email}</td>
              <td>{user.Address}</td>
              <td>{user.City}</td>
              <td>{user.Pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataDisplay;
