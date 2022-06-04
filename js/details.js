import { productList } from './constants/productList.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

const idContainer = document.querySelector('.id');
const productContainer = document.querySelector('#product-main');

idContainer.innerHTML = id;

const createHtml = () => {
	productContainer.innerHTML += `

	

`;
};
