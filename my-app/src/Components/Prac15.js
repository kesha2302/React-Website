import Data from "./Data"

function Prac15() {
    const products=[
        {
            id:1,
            name:'Product1',
            price:'Rs 10',
            img:'Image/cake1.jpg'
            
        },
        {
            id:2,
            name:'Product2',
            price:'Rs 20',
             img:'Image/cake2.jpg'
        },
        {
            id:3,
            name:'Product3',
            price:'Rs 30',
             img:'Image/cake3.jpg'
        },
        {
            id:4,
            name:'Product4',
            price:'Rs 40',
             img:'Image/cake4.jpg'
        }
    ]

    // const productList = products.map(product=><h5>{product.id} {product.name} {product.price}</h5>)
    const productList = products.map(product =><Data  key={product.id}  product ={product}/>)
  return (
    <div>
      {productList}
      {/* <Data/> */}
    </div>
  )
}

export default Prac15
