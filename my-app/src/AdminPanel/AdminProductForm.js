import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Adminhome2 from './Slidebar';
// import AdminProduct from './AdminProduct';

function AdminProductForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [val, setValues] = useState({
    ProductName: '',
    ProductPrice: '',
    ProductImage: ''
  });


  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: name === 'ProductImage' ? files[0] : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!val.ProductName) newErrors.ProductName = 'Product Name is required';
    if (!val.ProductPrice) newErrors.ProductPrice = 'Product Price is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const collectData = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const formData = new FormData();
    
      // Append all form fields to FormData object
      formData.append('ProductName', val.ProductName);
      formData.append('ProductPrice', val.ProductPrice);
      formData.append('ProductImage', val.ProductImage);  // Ensure this is the correct file
  
      try {
        const response = await axios.post("http://localhost:5000/ProductForm", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        if (response.status === 200) {
          navigate('/AdminProduct'); 
        } else {
          console.error('Error in response:', response.data);
        }
      } catch (err) {
        console.error('Error while submitting data:', err);
      }
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
        <div className='col col-lg-9'>


          <div className="card text-center mt-3 mx-auto" style={{ width: "50rem", height: "22rem" }}>

            <div className="card-header">
              <h3>Product Details Form</h3>
            </div>
          

              <div className="card-body">
                <form onSubmit={collectData} encType="multipart/form-data">
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Product Name:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={val.ProductName} onChange={handleChange} name="ProductName" />
                      {errors.ProductName && <div className="text-danger">{errors.ProductName}</div>}

                    </div>
                  </div>
                  
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Product Price:</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" value={val.ProductPrice} onChange={handleChange} name="ProductPrice" />
                      {errors.ProductPrice && <div className="text-danger">{errors.ProductPrice}</div>}
                    </div>
                  </div>
                  
                 
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Product Image</label>
                    <div className="col-sm-10">
                      <input type="file" className="form-control" onChange={handleChange} name="ProductImage" />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
           

          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminProductForm
