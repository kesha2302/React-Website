import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
 
<footer class="text-center text-lg-start bg-dark text-muted">

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-facebook"></i>
      </a>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
      <i class="bi bi-whatsapp"></i>
      </a>
     
    </div>
   
  </section>
  
  <section class="bg-dark">
    <div class="container text-center text-md-start mt-5 bg-dark">
     
      <div class="row mt-3">
      
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto ">
         
          <h6 class="text-uppercase fw-bold mb-4">
          <i class="bi bi-gem me-2"></i>Cake Shop
          </h6>
          <p>
            Here you can use add company details.
          </p>
        </div>
       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto ">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Regular Cakes</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Cupcakes</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Muffins</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Macaron</a>
          </p>
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link  class="text-reset" to="/About">About</Link>
            {/* <a href="#!" class="text-reset">About</a> */}
          </p>
          <p>
            <a href="#!" class="text-reset">Privacy Policy</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 ">
         
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="bi bi-house-fill me-2"></i>313, Bakrol Square</p>
          <p>
          <i class="bi bi-envelope-fill me-2"></i>
            info@example.com
          </p>
          <p><i class="bi bi-telephone-fill me-2"></i> + 91 1235355453</p>
          <p><i class="bi bi-telephone-fill me-2"></i> + 91 9865545454</p>
        </div>
       
      </div>

    </div>
  </section>


 
  <div class="text-center p-3" >
    © 2024 Copyright:
    <a class="text-reset fw-bold" href="#">XYZ.com</a>
  </div>

</footer>

    </div>
  )
}

export default Footer
