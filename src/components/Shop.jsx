import { useState } from 'react';
import styles from '../styles/shop.css';

function Product({ image, name, description, price }) {
	return (
		<div className="flex-centered column product">
			<img src={image} alt={description} />
			<div className="flex details">
				<p>${price}</p>
				<p>{name}</p>
			</div>
			<button className="add-to-cart">Add</button>
		</div>
	);
};

function Shelf({ products }) {
	return (
		<div className="flex shelf">
			{map.products(product => {
				<Product
					image={product.image}
					name={product.name}
					description={product.description}
					price={product.price}
				/>
			})}
		</div>
	);
};

function Shop() {
	const [categories, setCategory] = useState([]);

	return (
		<main>
			{map.categories(category => {
				<Shelf products={category.products} />
			})}
		</main>
	);
};
