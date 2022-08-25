const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

const productContainer = document.querySelector('#product-info');

const url =
	'https://www.course-assignment.store/wp-json/wc/store/products/' + id;

const addToCartBtn = document.querySelector('.add-to-cart');

const getProductDetails = async () => {
	try {
		const response = await fetch(url);
		const search = await response.json();
		createHTML(search);
	} catch (error) {}
};

getProductDetails();

const createHTML = (search) => {
	productContainer.innerHTML += `
	<div class=container>
			<div class="text-container">
				<h1 class="product-title">${search.name}</h1>
				<p class="product-price">${search.prices.price} NOK</p>
				<div class="size-container">
					<div>S</div>
					<div>M</div>
					<div>L</div>
					<div>XL</div>
				</div>
				<div>

					<div class="lds-ring">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>

				<div class="flex description">
					<p id="active">Description</p>
					<p>Reviews</p>
				</div>
				<ul class="product-info">
					<li>${search.description}</li>
					<li>${search.short_description}</li>
				</ul>
				<button class="add-to-cart" >Add to cart</button>
				<img
				src=${search.images[0].src}
				alt="Image of jacket"
				class="product-image"
			/>
			</div>

			</div>

`;

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
};

createHTML();
