const form = document.querySelector('.contact-input');
const userName = document.querySelector('#name');
const nameError = document.querySelector('.nameError');
const email = document.querySelector('#email');
const emailError = document.querySelector('.emailError');
const number = document.querySelector('#number');
const phoneError = document.querySelector('.phoneError');
const message = document.querySelector('#message');
const messageError = document.querySelector('.messageError');

const errorList = document.querySelector('.errorList');
const success = document.querySelector('.success');

const validate = (event) => {
	event.preventDefault();

	const validateName = validateLength(userName.value, 0, nameError);

	let emailValidate = false;

	if (validateEmail(email.value) === true) {
		emailError.style.display = 'none';
		emailValidate = true;
	} else {
		emailError.style.display = 'block';
		errorList.style.display = 'block';
	}

	const validatePhone = validateLength(number.value, 8, phoneError);

	if (validateName && emailValidate && validateEmail && validatePhone) {
		success.style.display = 'block';
	}
};

form.addEventListener('submit', validate);

const validateLength = (value, len, errorType) => {
	if (value.trim().length > len) {
		errorType.style.display = 'none';
		return true;
	} else {
		errorType.style.display = 'block';
		errorList.style.display = 'block';
	}
};

const validateEmail = (email) => {
	const regEx = /\S+@\S+\.\S/;
	const patternMatches = regEx.test(email);
	return patternMatches;
};
