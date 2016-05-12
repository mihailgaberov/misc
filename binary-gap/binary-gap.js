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

function getLongestBinaryGap (num) {
	if ((/[^0-9]/g.test(num)) || num === "") {
		console.log("You must enter an integer decimal number!");
		return 0;
	}

	num = parseInt(num);
	var bin = num.toString(2);

	var arrBinaries = bin.split('1');


	if (arrBinaries === 'undefined') 
		return;

	var arrZeros = [];
	var i = 0;
	var len = arrBinaries.length;
	var prev = '';
	var curr = '';
	var next = '';
	while (i < len) {
		prev = arrBinaries[i-1];
		curr = arrBinaries[i];
		next = arrBinaries[i+1];

		if (curr !== '' && arrBinaries.indexOf(curr) !== 0) {
			if (prev !== 'undefined') {
				if (next !== 'undefined' && next === '' || arrBinaries.indexOf(curr) !== (len-1)) {
					arrZeros.push(curr);
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