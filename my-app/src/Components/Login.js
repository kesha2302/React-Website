
// function Login() {
//   return (
//     <div>
//       <h1 className="text-center m-4">Login</h1>
//       <div class="card text-white bg-primary mb-3 mx-auto shadow-lg" style={{width: "50rem"}}>
       
//         <div class="card-body m-3">
       
//         <div class="mb-3">
//             <label for="formGroupExampleInput" class="form-label">Email:</label>
//             <input type="text" class="form-control"  placeholder="Email"/>
//         </div>

//         <div class="mb-3">
//             <label for="formGroupExampleInput" class="form-label">Password:</label>
//             <input type="text" class="form-control"  placeholder="Password"/>
//         </div>

//         <div class="row ">
//     <div class="col  justify-content-center mt-2">
//       <div class="form-check">
//         <input class="form-check-input" type="checkbox" value="" id="form2Example31"  />
//         <label class="form-check-label" for="form2Example31"> Remember me </label>
//       </div>
//     </div>

//     <div class="col-3 mt-2">
//       <a href="#!" style={{color:"blue"}} className="active">Forgot password?</a>
//     </div>
//   </div>

       
//         <div class="col-12 text-center mt-5 mb-2">
//             <button type="submit" class="btn btn-dark btn-lg px-3">Login in</button>
//         </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default Login
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate('/Signup');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/Login', { email, password })
      .then((response) => {
        if (response.data.login) {

          localStorage.setItem('token', response.data.token);
          window.alert(`Welcome, ${response.data.username}!`);
          navigate('/', { state: { username: response.data.username } });
        } else {

          console.error('Login failed. Please check your credentials.');
          window.alert(`Wrong Password , Login Failed`);
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);

        console.error('Error during login:', error);
      });
  };

  return (
    <div>
      

      <div className="card text-white bg-primary mb-3 mx-auto shadow-lg mt-2" style={{width: "50rem"}}>

        <div className="card-header">
          <h3>Login Page</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleLogin}>

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label"  >Email:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" name="email"

                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label"  >Password:</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" name="password"

                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            <div class="row ">
    <div class="col  justify-content-center mt-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31"  />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col-3 mt-2">
      <a href="#!" style={{color:"blue"}} className="active">Forgot password?</a>
    </div>
  </div>
            <div className="d-grid gap-2 d-md-block">
              <button className="btn btn-dark m-2" type="button" onClick={handleclick}>Back</button>
              <button className="btn btn-dark m-2" type="submit" >Login</button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
