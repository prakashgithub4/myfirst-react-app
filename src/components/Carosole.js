// import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function CarosoleBanner(){
   return (
    <Carousel  showThumbs={false} dynamicHeight={true}>
    <div>
        <img src="./images/1.jpg" width="1116" height="372" />
        {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
        <img src="./images/2.jpg"  width="1116" height="372"/>
        {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
        <img src="./images/3.jpg"  width="1116" height="372"/>
        {/* <p className="legend">Legend 3</p> */}
    </div>
    </Carousel>
   );
}