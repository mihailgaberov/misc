'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Input: ', (arr) => {
	console.log('');
	console.log('Output: ', getUnpairedElement(arr));
	console.log('');
	rl.close();
});


var arrDuplicates = [];
function hasDuplicate (el) {
	if (arrDuplicates.length === 0) {
		arrDuplicates.push(el);
		return false;
	}

	for(var i = 0, len = arrDuplicates.length; i < len; i++){
		console.log('arrDuplicates[i]: ', arrDuplicates[i]);
		if (el === arrDuplicates[i]) {
			return true;
		} else {
			arrDuplicates.push(el);
		}
	}

	return false;
}


function getUnpairedElement (arr) {

	arr = arr.split(',');

	// 1. Verify intpu data - non-empty zero-indexed array containing odd number of integers
	if (arr === 'undefined' || (toString.call(arr) !== '[object Array]') || arr.length === 0 || arr.length % 2 === 0) {
		return 'The passed array should be a valid non-empty array containing odd number of indegers!';
	}

	// 2. Verify that the array contains only integers
	for (var i = 0, len = arr.length; i < len; i++) {
		if (!Number.isInteger(parseInt(arr[i]))) {
			return 'The passed array should be containing only integers';
		}
	}


	// 3. Find the pairs in the array and remove the duplicates
	arr = arr.map((el, idx) => {
		if (arr.length === 1) {
			return el;
		}

		if (hasDuplicate(el)) {
			arr.splice(idx, 1);
		} else {
			return el;
		}
	});
	

	console.log('>>> result: ', arr);

	// 4. Return the unpaired element
	return arr.length === 1 ? arr[0] : 'There is no unpaired element.';
}