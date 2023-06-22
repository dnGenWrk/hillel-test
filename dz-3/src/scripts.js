let number1 = prompt('Enter please number 1', '');
let number2 = prompt('Enter please number 2', '');
if (number1 && number2) {
	number1 = Number(number1);
	number2 = Number(number2);
	const resultSum = number1 + number2;
	const resultExcerpt = number1 - number2;
	const resultMultiplication = number1 * number2;
	const resultDivision = number1 / number2;

	alert(`
    ${number1} + ${number2} = ${resultSum}
    ${number1} - ${number2} = ${resultExcerpt}
    ${number1} * ${number2} = ${resultMultiplication}
    ${number1} / ${number2} = ${resultDivision}
    `);
} else {
	alert('Something Wrong...');
}
