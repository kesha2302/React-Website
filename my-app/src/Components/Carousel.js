// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'

// function HomePageCarousel() {
//   return (
//     <div>
//      <div id="carouselExample" class="carousel slide">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="Image/cake1.jpg" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="Image/cake2.jpg" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="Image/cake3.jpg" class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//     </div>
//   )
// }

// export default HomePageCarousel

// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function HomePageCarousel() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="Image/cake1.jpg"
//           alt="Cake 1"
//           height="300"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="Image/cake2.jpg"
//           alt="Cake 2"
//           height="300"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="Image/cake3.jpg"
//           alt="Cake 3"
//           height="300"
//         />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default HomePageCarousel;

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img
          className="d-block w-100"
          src="Image/cake1.jpg"
          alt="Cake 1"
          height="300"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
          className="d-block w-100"
          src="Image/cake2.jpg"
          alt="Cake 1"
          height="300"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img
          className="d-block w-100"
          src="Image/cake3.jpg"
          alt="Cake 1"
          height="300"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
