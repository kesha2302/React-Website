import Adminhome2 from "./Slidebar"
import UsersList from "./UsersList"
import React, { useState } from 'react';

function AdminUser() {
    const [sortBy, setSortBy] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleSort = (value) => {
        setSortBy(value);
    };

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/usersearch?q=${searchTerm}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error.message);
        }
    };

    return (
        <div>
            <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white"><h3>Admin Panel</h3></a>

        </div>
      </nav>
            <div className='row'>
                <div className='col'>
                    <Adminhome2 />
                </div>
                {/* col2 start */}
                <div className='col col-lg-9'>
                    <div className='m-2'>
                        <h3>Users</h3>
                        <hr />
                        <p className="fw-light">Check all your users detail here.</p>

                        {/* Navbar2 start */}
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">

                            <div className="container-fluid">

                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarCenteredExample"
                                    aria-controls="navbarCenteredExample"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <i className="fas fa-bars"></i>
                                </button>


                                <div
                                    className="collapse navbar-collapse justify-content-center"
                                    id="navbarCenteredExample"
                                >


                                    <div className="dropdown ">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-funnel-fill"> Sort</i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"
                                                onClick={() => handleSort('Alphabetical')}>Alphabetical Name</a></li>
                                            <li><a className="dropdown-item" href="#"
                                                onClick={() => handleSort('NumericalQuantity')}>Pincode</a></li>
                                        </ul>
                                    </div>

                                    <form className="d-flex m-3" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <button className="btn btn-secondary" type="button"
                                            onClick={handleSearch}>
                                            <i className="bi bi-search"></i>
                                        </button>
                                    </form>

                                </div>

                            </div>

                        </nav>

                        {/* Navbar2 end */}

                        {/* table start */}
                        <div className='card mx-auto' style={{ height: "31rem", width: "50rem" }}>
                            <div className="overflow-y-scroll">
                                <div className='card-body'>

                                    {searchResults.length > 0 ? (
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Username</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                    <th>City</th>
                                                    <th>Pincode</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {searchResults.map(result => (
                                                    <tr key={result.cust_id}>
                                                        <td>{result.Fullname}</td>
                                                        <td>{result.Username}</td>
                                                        <td>{result.Email}</td>
                                                        <td>{result.Address}</td>
                                                        <td>{result.City}</td>
                                                        <td>{result.Pincode}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p></p>
                                    )}


                                    <UsersList sortBy={sortBy} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* column2 end */}
            </div>
        </div>
    )
}

export default AdminUser
