import { products } from './constants/productList.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

// const idContainer = document.querySelector('.id');
const productContainer = document.querySelector('#product-info');

const addToCartBtn = document.querySelector('.add-to-cart');

let search = products.find((x) => {
	return x.name === id;
});

// addToCartBtn.onclick = function () {
// 	console.log('add');
// };

productContainer.innerHTML += `
	<div class=container>
	
			<div class="text-container">
				<h1 class="product-title">${search.name}</h1>
				<p class="product-color">${search.stock} left in stock</p>
				<p class="product-price">${search.price} NOK</p>
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
					<li>Water resistant</li>
					<li>Windproof</li>
					<li>Gore Tex</li>
				</ul>
				<button class="add-to-cart" >Add to cart</button>
				<img
				src=${search.image}
				alt="Image of jacket"
				class="product-image"
			/>
			</div> 
			
			
			</div>

`;
