import { Component } from 'react'
import { Link } from 'react-router-dom';

class Adminhome2 extends Component {
  render() {
    return (
      <div>
        <div className="d-flex flex-column flex-shrink-0 p-3  bg-tertiary border" style={{ width: "280px", height: "710px" }}>

          <ul className="nav nav-pills flex-column mb-auto ">
            <Link to="/Admindashboard" style={{ color: '#FFF' }}>
              <li className="nav-link  text-dark" >

                <h5><i className="bi bi-house-fill "></i> Home</h5>

              </li>
            </Link>
            <hr />
            <Link to="/AdminProduct" style={{ color: '#FFF' }}>
              <li className="nav-link text-dark">
                {/* <a href="#" > */}
                <h5><i className="bi bi-bag-fill  "></i> Products</h5>
                {/* </a> */}
              </li>
            </Link>
            
            <hr />
            <Link to="/AdminUser" style={{ color: '#FFF' }}>
              <li className="nav-link text-dark">

                <h5><i className="bi bi-people-fill "></i> Users</h5>

              </li>
            </Link>
            
          </ul>

        </div>


      </div>
    )
  }
}

export default Adminhome2
