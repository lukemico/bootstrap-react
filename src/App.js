import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CarouselFadeExample from './components/carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
			<Header />
			<CarouselFadeExample />
			<Footer />
		</div>
	);
}

export default App;
