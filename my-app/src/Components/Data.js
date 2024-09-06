
function Data({product}) {
  return (
    <div>
      {/* <h5>{product.id} {product.name} {product.price} </h5> */}
      <div class="card m-5" style={{width: "18rem"}} >
  <img src={product.img} class="card-img-top" alt="..." style={{ width: "100%", height: "200px", objectFit: "cover" }} />
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <p class="card-text">{product.price}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
      
    </div>
  )
}

export default Data
