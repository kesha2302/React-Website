import Adminhome from "./Adminhome"
import Adminhome2 from "./Slidebar"

function Admindashboard() {
  return (
    <div>
      {/* <div className='container'> */}
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white"><h3>Admin Panel</h3></a>

        </div>
      </nav>
      <div className='row'>
        <div className='col'>
          <Adminhome2/>
        </div>
        <div className='col col-lg-9'>
          <Adminhome />
        </div>
      </div>
    </div>

    // </div>
  )
}

export default Admindashboard
