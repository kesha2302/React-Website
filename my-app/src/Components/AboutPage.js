import Footer from "./Footer"
import Navbar from "./Navbar"

function AboutPage() {
  return (
    <div className="text-center">

      <Navbar/>
      <h1 className="m-4">About Page</h1>
      <div className="card text-white bg-primary mb-3 mx-auto" style={{width:"70rem"}}>
  
  <div className="card-body">
    <h4 className="card-title">About Us</h4>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat qui facilis ratione iste doloribus, incidunt nulla dignissimos architecto aliquam eligendi distinctio dolorum mollitia iure ea magni earum! Eaque, aut maiores!</p>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat qui facilis ratione iste doloribus, incidunt nulla dignissimos architecto aliquam eligendi distinctio dolorum mollitia iure ea magni earum! Eaque, aut maiores!</p>
  </div>
</div>


<div className="card text-white bg-dark mb-3 mx-auto" style={{width:"70rem"}}>
  
  <div className="card-body">
  <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat qui facilis ratione iste doloribus, incidunt nulla dignissimos architecto aliquam eligendi distinctio dolorum mollitia iure ea magni earum! Eaque, aut maiores!</p>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat qui facilis ratione iste doloribus, incidunt nulla dignissimos architecto aliquam eligendi distinctio dolorum mollitia iure ea magni earum! Eaque, aut maiores!</p>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default AboutPage
