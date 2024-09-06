
function Products({product }) {
    return (
      <div>
        <h5> {product.id}  {product.name}  {product.weight}  {product.price}</h5>
        {/* <div class="card" style={{width:" 18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">{product.weight}</p>
    <p class="card-text">{product.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
      </div>
    )
  }
  
  export default Products
  