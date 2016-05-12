'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Please enter a positive integer decimal number? ', (num) => {
	console.log('');
	console.log('The length of the longest binary gap: ', getLongestBinaryGap(num));
	console.log('');

	rl.close();
});

/*function convertToBinary (n) {
	if ((/[^0-9]/g.test(n)) || n == "") {
		console.log("You must enter an integer decimal number!");
		return 0;
	}

	n = parseInt(n);
	let bin = n.toString(2);

	return bin;
}*/

function getLongestBinaryGap (num) {
	if ((/[^0-9]/g.test(num)) || num == "") {
		console.log("You must enter an integer decimal number!");
		return 0;
	}

	num = parseInt(num);
	let bin = num.toString(2);
	let arrBinaries = bin.split('1');


	if (arrBinaries === 'undefined') 
		return;

	let arrZeros = [];
	let i = 0;
	let len = arrBinaries.length;
	while (i < len) {
		if (arrBinaries[i] !== '') {
			if (arrBinaries[i-1] !== 'undefined' && arrBinaries[i-1] === '' || (arrBinaries[i-1] && arrBinaries[i-1] !== '') ) {
				if (arrBinaries[i+1] !== 'undefined' && arrBinaries[i+1] === '' || 
					arrBinaries[i] && arrBinaries[i+1] && arrBinaries[i].length >= arrBinaries[i+1].length) {
					arrZeros.push(arrBinaries[i]);
			}
		}
	}

	i++;
}

var longest = arrZeros.reduce((prev, curr)  => { 
	return prev.length > curr.length ? prev : curr; 
}, 0);


return longest.length ? longest.length : 0;
}