import { Link } from 'react-router';
import styles from '../styles/home.css';
import hero from '../assets/hero.webp';
import money from '../assets/money.svg';

export default function Home() {
	return (
		<main className="flex-centered column">
			<div id="hero" className="flex-centered column">
				<h2>Welcome to the shop demo.</h2>
				<img id="hero-image" src={hero} alt="Backpacker looking out over a trail on a hill." data-credit="OpenClipart-Vectors from Pixabay" />
			</div>
			<div className="flex-centered info">
				<h3>Real shops make money. Not this one.</h3>
				<img src={money} alt="Dollar sign" data-credit="Filip Kvasnak from Unsplash" />
			</div>
			<Link to="shop"><button id="browse">Browse</button></Link>
		</main>
	);
};
