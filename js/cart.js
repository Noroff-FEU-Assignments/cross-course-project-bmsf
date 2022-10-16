const url = 'https://www.course-assignment.store/wp-json/wc/store/products';

const getProducts = async () => {
	try {
		const response = await fetch(url);
		const getResults = await response.json();

		generateCart(getResults);
	} catch (error) {}
};

getProducts();

const cartMain = document.querySelector('.cart-main');

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

console.log(shoppingCart);

let search = products.find((x) => {
	return x.name === shoppingCart.name;
});

const addBtn = document.querySelector('.add');
const removeBtn = document.querySelector('#remove');

const generateCart = (products) => {
	products.forEach((product) => {
		console.log(product);
	});

	if (shoppingCart.length !== 0) {
		return (cartMain.innerHTML = shoppingCart
			.map((x) => {
				let { name, item } = x;
				let search = products.find((item) => item.name === name);

				return `

            <div class="flex cart-form">
				<img
					src=${search.image}
					alt="Image of jacket"
					id="cart-image"
				/>
				<div class="flex text-div">
					<h3 class="product-title">${search.name}</h3>
					<p>Color: ${search.color}</p>
					
				</div>
				<i  class="fas fa-trash" id="remove"></i>
			</div>

           
			
			<div class="hl" id="cart-hl"></div>
			
            `;
			})
			.join(''));
	} else {
		cartMain.innerHTML += `<h4 class="empty">Cart is empty</h4>`;
	}
};

generateCart();

removeBtn.onclick = function () {
	removeItem(search.name);
};

let removeItem = (name) => {
	let selectedItem = id;

	shoppingCart = shoppingCart.filter((x) => x.name !== selectedItem.name);
	// generateCartItems();
	// TotalAmount();
	localStorage.setItem('data', JSON.stringify(basket));

	console.log(shoppingCart);
};

{
	/* <div class="flex add-or-remove">
					<i class="fas fa-minus" class="remove"></i>
					<p>1</p>
					<i class="fas fa-plus" class="add"></i>
				</div> 
            
            <div class="flex cart-form">
				
				<p>3,900.00 NOK</p>
			</div>
            */
}
