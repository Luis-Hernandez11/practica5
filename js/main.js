//busca la palabra sol en mayuscula y minuscula y que encuentre numero
//regex
const campo = document.querySelector('#campo');
const button = document.querySelector('#button');

button.addEventListener('click', e =>{
	const regex = /[0-5sol]/gi;
	

	const validation = campo.value.match(regex);
	document.write("<h2>resultado: " + validation + "</h2>");
	console.log(validation);
});


//busca solo numeros
const campo2 = document.querySelector('#campo2');
const button2 = document.querySelector('#button2');

button2.addEventListener('click', w =>{
	const regex3 = /[0-9\d]/g;
	

	const validation2 = campo2.value.match(regex3);
	document.write("<h2>resultado: " + validation2 + "</h2>");
	console.log(validation2);
});
