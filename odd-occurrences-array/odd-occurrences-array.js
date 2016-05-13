'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var arrLarge = [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2];

rl.question('Input: ', (arr) => {
	console.log('');
	// console.log('Output: ', getUnpairedElement([9, 3, 9, 3, 9, 7, 9]));
	// console.log('Output: ', getUnpairedElement(arr));	// Uncomment this is you want to input data via cmd
	console.log('Output: ', getUnpairedElement(arrLarge));
	console.log('');
	rl.close();
});

function isInt4(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function getUnpairedElement (arr) {
	// Uncomment this is you want to input data via cmd
	/*if (arr) {
		var arrTemp = arr.split(',');
		arr = arr.split(',');
	}*/
	

	 // 1. Verify intpu data - non-empty zero-indexed array containing odd number of integers
	if (arr === 'undefined' || (toString.call(arr) !== '[object Array]') || arr.length === 0 || arr.length % 2 === 0) {
		return 'The passed array should be a valid non-empty array containing odd number of indegers!';
	}

	// 2. Verify that the array contains only integers
	var z = 0;
	while (z < arr.length) {
		if (!isInt4(arr[z])) {
			return 'The passed array should be containing only integers';
		}
		z++;
	}
	

	// 3. Find the number of occurrences for each element
	var arrTemp = arr.toString().split(','),	// Comment this if you are going to use the console (cmd) to input data
		arrObjects = [],
		k = 0,
		arrLen = arr.length;

	while (k < arrLen) {
		var currEl = arr.splice(0, 1);
		var obj = { 
			'occurrences': 0,
			'elemValue': 0
		};

		var j = 0;
		while (j < arrTemp.length) {
			if (currEl.toString() === arrTemp[j].toString()) {
				obj.occurrences++;
				obj.elemValue = arrTemp[j];
			}
			j++;
		}
		k++;

		
		if (obj.occurrences === 1) {
			return parseInt(obj.elemValue, 10);
		}
	}
}