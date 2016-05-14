'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var arrLarge = [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2];

rl.question('Input: ', (arr) => {
	console.log('');
	console.log('Output: ', getUnpairedElement([9, 3, 9, 3, 9, 7, 9]));
	// console.log('Output: ', getUnpairedElement(arr));	// Uncomment this is you want to input data via cmd
	// console.log('Output: ', getUnpairedElement(arrLarge));
	console.log('');
	rl.close();
});

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
		if (!Number.isInteger(arr[z])) {
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
		var obj = { 
			'occurrences': 0,
			'elemValue': 0
		};

		var currEl = arr.splice(0, 1);
		currEl = parseInt(currEl, 10);
		
		var j = 0;
		while (j < arrTemp.length) {
			arrTemp[j] = parseInt(arrTemp[j], 10);
			if (currEl === arrTemp[j]) {
				obj.occurrences++;
				obj.elemValue = currEl;
			}
			j++;
		}
		k++;

    	if (obj.occurrences === 1) {
    		return obj.elemValue;
    	}
	}
}