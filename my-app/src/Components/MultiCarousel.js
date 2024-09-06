import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Prac15 from './Prac15';
import Data from './Data';
import { products } from './Productdata';

function MultiCarousel() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const productList = products.map(product =><Data  key={product.id}  product ={product}/>)
  return (
    <div>
      <Carousel responsive={responsive}>{productList}
  
</Carousel>;
    </div>
  )
}

export default MultiCarousel
