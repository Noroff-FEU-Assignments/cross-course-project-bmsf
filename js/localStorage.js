let shoppingCart = JSON.parse(localStorage.getItem('data')) || [];

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
