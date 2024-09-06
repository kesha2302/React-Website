
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const navigate = useNavigate();

    const [val, setValues] = useState({
      Fullname: '',
      Username:'',
      Email: '',
      Password: '',
      Address: '',
      City: '',
      Pincode: ''
    }, []);

    const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!val.Fullname.trim()) newErrors.Fullname = 'Fullname is required';
    if (!val.Username.trim()) newErrors.Username = 'Username is required';
    if (!val.Email.trim()) newErrors.Email = 'Email is required';
    if (!val.Password.trim()) newErrors.Password = 'Password is required';
    if (!val.Address.trim()) newErrors.Address = 'Address is required';
    if (!val.City.trim()) newErrors.City = 'City is required';
    if (!val.Pincode.trim()) newErrors.Pincode = 'Pin Code is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const collectData = (e) => {
    e.preventDefault();

    if (validateForm()) {

      axios.post("http://localhost:5000/Signup", val)
        .then(res => {
          navigate('/LoginPage');
        })
        .catch(err => console.log(err));
    }
  };

  
    return (
      <div>
        <h1 className="text-center p-3 m-4">Sign-Up</h1>
  
        <div class="card text-white bg-primary mb-3 mx-auto shadow-lg" style={{width: "50rem"}}>
         
          <div class="card-body m-3">
            <form onSubmit={collectData}>
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Full Name:</label>
              <input type="text" class="form-control"  placeholder="Full Name"
              value={val.Fullname} onChange={handleChange} name="Fullname"/>
              {errors.Fullname && <div className="text-danger">{errors.Fullname}</div>}

          </div>
  
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Username:</label>
              <input type="text" class="form-control"  placeholder="Username"
              value={val.Username} onChange={handleChange} name="Username"/>
              {errors.Username && <div className="text-danger">{errors.Username}</div>}

          </div>
  
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Email:</label>
              <input type="text" class="form-control"  placeholder="Email"
              value={val.Email} onChange={handleChange} name="Email"/>
               {errors.Email && <div className="text-danger">{errors.Email}</div>}

          </div>
  
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Password:</label>
              <input type="text" class="form-control"  placeholder="Password"
              value={val.Password} onChange={handleChange} name="Password"/>
              {errors.Password && <div className="text-danger">{errors.Password}</div>}
          </div>
  
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Address:</label>
              <textarea class="form-control"  placeholder="Address"
              value={val.Address} onChange={handleChange} name="Address"></textarea>
               {errors.Address && <div className="text-danger">{errors.Address}</div>}

          </div>
  
          <div className="row">
          <div class="col-md-6">
              <label for="inputCity" class="form-label">City:</label>
              <input type="text" class="form-control" id="inputCity" placeholder="City"
              value={val.City} onChange={handleChange} name="City"/>
              {errors.City && <div className="text-danger">{errors.City}</div>}

          </div>
         
          <div class="col-md-2">
              <label for="inputZip" class="form-label">Pincode:</label>
              <input type="text" class="form-control" id="inputZip" placeholder="Pincode"
              value={val.Pincode} onChange={handleChange} name="Pincode"/>
              </div>
              {errors.Pincode && <div className="text-danger">{errors.Pincode}</div>}

          </div>
  
          <div class="col-12 text-center mt-5 mb-2">
              <button type="submit" class="btn btn-dark btn-lg px-3">Sign in</button>
          </div>
          </form>
          </div>
        </div>
  
      </div>
    )
  }
  
  export default Signup