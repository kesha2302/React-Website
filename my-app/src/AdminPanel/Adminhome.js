import { Component } from 'react'
import axios from 'axios';

class Adminhome extends Component {
  state = {
    totalUsers: 0,
  };

  componentDidMount() {
    // Fetching total users number
    axios.get('http://localhost:5000/totalUsers')
      .then((response) => {
        this.setState({ totalUsers: response.data.totalUsers });
      })
      .catch((error) => {
        console.error('Error fetching total users:', error);
      });
  }

  render() {
    return (
      <div>

        <div className="container-fluid ">
          <h3 className='mt-2'>Hii, Welcome back!</h3>
          <p>This is your backery monitoring Dashboard.</p>


          <div className="card mt-5 bg-secondary" style={{ width: "58rem", height: '150px' }}>

            <div className="row g-0">

              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-d" >Total Users</h5>

                  <p className="card-text"><big className="text-body-secondary">{this.state.totalUsers}</big></p>
                </div>
              </div>
              <div className="col-md-4 pt-3">
                <img src="https://cdn-icons-png.flaticon.com/128/1379/1379505.png" className="img-fluid rounded-start" alt="..." width='100px' height='100px' />
              </div>
            </div>

          </div>

        </div>



      </div>
    )
  }
}

export default Adminhome
