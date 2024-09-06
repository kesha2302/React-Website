import Footer from "./Footer"
import Navbar from "./Navbar"

function Contact() {
  return (
    <div className="text-center">
      <Navbar/>
      <h1 className="m-4">Contact Page</h1>
      <div className="card text-white bg-primary mb-3 mx-auto" style={{width:"70rem"}}>
  <div className="card-body">
    <h4 className="card-title">Contact Us</h4>
    <h6 className="card-text"><i className="bi bi-person-fill">Name: </i> Kesha Patel</h6>
    <h6 className="card-text"><i className="bi bi-envelope">Email: </i> abc@email.com</h6>
    <h6 className="card-text"><i className="bi bi-telephone-fill">Contact: </i> +91 1235535332</h6>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Contact
