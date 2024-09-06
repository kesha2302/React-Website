import Footer from "./Footer"
import Navbar from "./Navbar"

function Feedback() {
  return (
    <div className="text-center">
      <Navbar/>
        <h1 className="mt-5">Feedback Form</h1>

        <div class="card bg-light mb-3 m-5" style={{width:" 20rem;"}}>
  <div class="card-body">
  <form>
    <div className="row">
      <label for="staticEmail" className="col-sm-2 col-form-label">Email:</label>
      <div className="col-sm-10">
        <input type="text" readonly="" className="form-control" id="staticEmail" value="email@example.com"/>
      </div>
    </div>

    <div className="row mt-2">
      <label for="staticEmail" className="col-sm-2 col-form-label">Message:</label>
      <div className="col-sm-10">
      <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
      </div>
    </div>
    <button type="submit" className="btn btn-primary mt-3">Submit</button>
</form>
  </div>
</div>

      <Footer/>
    </div>
  )
}

export default Feedback
