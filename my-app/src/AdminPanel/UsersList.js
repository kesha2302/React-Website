import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = ({ sortBy }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/users?sortBy=${sortBy}`
                );
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, [sortBy]);

    return (
        <div>

            <table className="table table-striped  w-auto align-middle mb-0">
                <thead className="bg-light">
                    <tr>
                        <th>Id</th>
                        <th>Fullname</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Pincode</th>
                        {/* <th>Instock</th> */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.customer_id}>
                            <td>
                                <p className="fw-normal mb-1">{user.cust_id}</p>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{user.Fullname}</p>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{user.Username}</p>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{user.Email}</p>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{user.Address}</p>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{user.City}</p>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{user.Pincode}</p>
                            </td>

                        </tr>
                    ))}




                </tbody>
            </table>
        </div>
    );
};

export default UsersList;
