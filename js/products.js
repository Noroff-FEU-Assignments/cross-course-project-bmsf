import { products } from './constants/productList.js';

const gridContainer = document.querySelector('.grid-container');
const cart = document.querySelector('.cart');
const cartList = document.querySelector('.cart-list');

let shoppingCart = JSON.parse(localStorage.getItem('data')) || [];

let totalProducts = 0;

products.forEach((product) => {
	let search = shoppingCart.find((x) => x.id === product.id) || [];
	gridContainer.innerHTML += `
		<div class='product'>
			<a  href='./product-page.html?id=${product.name}'>
				<img class='product-image' src=${product.image}/>
			</a>
			<div class>
				<p class="product-name">${product.name}</p>
				<p class="product-color">${product.color}</p>
			</div>
			<div class="flex price"><p clas="product-price">${product.price}.00 NOK</p>
			<button class='add-to-cart' data-product='${product.name}'>Add to cart</button></div>
			
		</div>
	`;
});

const buttons = document.querySelectorAll('button');

const dot = document.querySelector('.dot');
const dotMobile = document.querySelector('.dotMobile');

buttons.forEach((button) => {
	button.onclick = function (event) {
		let selectedItem = event.target.dataset.product;
		let search = shoppingCart.find((x) => x.name === selectedItem);

		if (search === undefined) {
			shoppingCart.push({
				name: selectedItem,
				item: 1,
			});
		} else {
			search.item += 1;
		}

		localStorage.setItem('data', JSON.stringify(shoppingCart));

		calculate(selectedItem);

		const handleBuy = () => {
			button.style.backgroundColor = '#3f452c';

			button.innerHTML = '<i class="fas fa-check"></i>';
		};

		handleBuy();

		setTimeout(function () {
			button.style.backgroundColor = 'orange';
			button.innerHTML = 'Add to cart';
		}, 2000);
	};
});

const calculate = (id) => {
	let cartIconMobile = document.querySelector('.dotMobile');
	let cartIcon = document.querySelector('.dot');

	cartIconMobile.innerHTML = shoppingCart
		.map((x) => x.item)
		.reduce((x, y) => x + y, 0);

	cartIcon.innerHTML = shoppingCart
		.map((x) => x.item)
		.reduce((x, y) => x + y, 0);
};

calculate();

// const showCart = (cartItems) => {
// 	cart.style.display = 'block';
// 	cartList.innerHTML = '';
// 	cartItems.forEach((cartElement) => {
// 		cartList.innerHTML += `
// 		<div class='cart-item'>
// 			<h4>${cartElement.name}</h4>
// 		</div>`;
// 	});
// };
