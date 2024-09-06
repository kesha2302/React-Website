import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  useLocation } from "react-router-dom"

function Navbar() {
  const { state } = useLocation();
  const username = state && state.username;

// The useLocation hook is used to access the current location object.
// state is destructured from the location object.
// username is extracted from state. If state is null or undefined, username will be undefined.
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>Cake Shop</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        
        <li className="nav-item">
          <Link className='nav-link active' to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link active' to='/About'>About</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link active' to='/Contact'>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link active' to='/Feedback'>Feedback</Link>
        </li>
        {username ? (
                                // If user is logged in, show user-related links
                                <>
                                    <li className="nav-item ms-3 ms-lg-3">
                                        <Link to="/Profile" className="nav-link">
                                            <img
                                                src={`https://ui-avatars.com/api/?name=${username[0]}&background=random&size=30`}
                                                alt="User Avatar"
                                                className="rounded-circle"
                                            />
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                // If user is not logged in, show Register and Login links
                                 
                                  <>

        <li className="nav-item m-1 ">
        <Link  to='/Signup'>
        <button class="btn btn-secondary">Sign-Up</button>
         </Link>
        </li>

        <li className="nav-item m-1 ">
        <Link  to='/Login'>
        <button class="btn btn-secondary">Login</button>
         </Link>
        </li>
        </>
                            )}

        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

       
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
