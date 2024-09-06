import { useNavigate } from "react-router-dom"

function Profile() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); 
      
        navigate('/'); 
      };
  return (
    <div>
       <a class="btn btn-secondary  mx-auto " style={{ background: "#002E6E" }} href="" role="button"
              onClick={handleLogout}>Logout</a>


              <h1>This Profile Page</h1>
    </div>
  )
}

export default Profile
