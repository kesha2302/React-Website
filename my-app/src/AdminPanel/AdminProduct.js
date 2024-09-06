// import AdminProductForm from "./AdminProductForm";
import AdminProductList from "./AdminProductList";
import Adminhome2 from "./Slidebar"
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
// import axios from 'axios';

function AdminProduct() {

  const [sortOption, setSortOption] = useState('');

  const navigate = useNavigate();
  const handleclick = () => {
    navigate('/ProductForm');
  }

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
            <h3>Products</h3>
            <hr />
            <p className="fw-light">Add,edit,remove and list products here.</p>

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


                
                  <div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <i className="bi bi-funnel-fill"></i> Sort
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li>
      <a className="dropdown-item" href="#" onClick={() => setSortOption('alphabetical')}>
        Alphabetical Name
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#" onClick={() => setSortOption('numerical')}>
        Numerical Price
      </a>
    </li>
  </ul>
</div>



                  <button type="button " className="btn btn-secondary font-rights" style={{ marginLeft: '20px' }}
                    onClick={handleclick}>
                    <i className="bi bi-plus">Add new product</i>
                  </button>
                </div>

              </div>

            </nav>

            {/* Navbar2 end */}

            {/* table start */}
            <div className='card mx-auto text-center' style={{ height: "33rem", width: "50rem" }}>
                <div className='card-body'>
                  <AdminProductList sortOption={sortOption} />
                </div>
            </div>
          </div>
        </div>
        {/* column2 end */}
      </div>
    </div>

  )
}

export default AdminProduct
