const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
const password = document.querySelector('#password');
const passwordError = document.querySelector('.password-error');
const card = document.querySelector('#card');
const cardError = document.querySelector('.card-error');
const date = document.querySelector('#date');
const dateError = document.querySelector('.date-error');
const cvv = document.querySelector('#cvv');
const cvvError = document.querySelector('.cvv-error');

const paymentForm = document.querySelector('.payment-form');
const submit = document.querySelector('.pay-now');

const validateCheckout = (event) => {
	event.preventDefault();

	const passedEmail = validateFunction(/\S+@\S+\.\S/, email.value, emailError);

	

	const passedCard = validateFunction(
		/^4[0-9]{12}(?:[0-9]{3})?$/,
		card.value,
		cardError
	);

	const passedDate = validateFunction(
		/^((0[1-9])|(1[0-2]))[\/\.\-]*((0[8-9])|(1[1-9]))$/,
		date.value,
		dateError
	);

	const passedCVV = validateFunction(/^[0-9]{3,4}$/, cvv.value, cvvError);

	const passedPassword = validateLength(password.value, 7, passwordError);

	if (passedEmail && passedCard && passedDate && passedCVV && passedPassword) {
		// submit.outerHTML += `<a href="/checkout-success.html"></a>`;

		console.log('');
	} else {
		console.log(passedEmail);
		console.log(passedCard);
		console.log(passedDate);
		console.log(passedCVV);
		console.log(passedPassword);
	}
};

paymentForm.addEventListener('submit', validateCheckout);

const validateFunction = (regex, value, error) => {
	const regEx = regex;
	const patternMatches = regEx.test(value);

	if (patternMatches) {
		error.style.display = 'none';
	} else {
		error.style.display = 'block';
	}
};

const validateLength = (value, len, errorType) => {
	if (value.trim().length > len) {
		errorType.style.display = 'none';
		return true;
	} else {
		errorType.style.display = 'block';
	}
};

// const validateDate = (expDate) => {
// 	const regexd = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
// 	const matching = regexd.test(expDate);
// 	return matching;
// };
