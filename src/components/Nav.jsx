import { Link } from 'react-router';
import styles from '../styles/nav.css';

export default function Nav() {
	return (
		<nav className="flex-centered">
			<h1>Fausse Boutique</h1>
			<div id="nav-links" className="flex">
				<Link to="/"><button>home</button></Link>
				<Link to="shop"><button>shop</button></Link>
				<Link to="cart"><button>cart</button></Link>
			</div>
		</nav>
	);
};
