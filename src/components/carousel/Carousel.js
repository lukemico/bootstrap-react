import Carousel from 'react-bootstrap/Carousel';
// import andrew from '../../assets/andrew.jpg;
import rafael from '../../assets/rafael.jpg';
import frogses from '../../assets/frogses.jpg';

function CarouselFadeExample() {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={frogses}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>
						Nulla vitae elit libero, a pharetra augue mollis
						interdum.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={rafael}
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={frogses}
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselFadeExample;
