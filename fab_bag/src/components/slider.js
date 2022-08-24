import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Entire-Bag_2048x.gif?v=1661167917"
          alt="First slide"
          style={{height:"500px",width:"90%"}}
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Skincare-2_fe5c9b55-fca9-4495-9b77-3d5cf03a4da7_2048x.png?v=1659887212"
          alt="Second slide"
          style={{height:"500px",width:"90%"}}
        />

        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Skincare-1_1_2048x.png?v=1659674596"
          alt="Third slide"
          style={{height:"500px",width:"90%"}}
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;