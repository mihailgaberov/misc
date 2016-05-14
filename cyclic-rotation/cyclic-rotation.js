'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Please enter a zero-indexed array consisting of integers, e.g. "1,2,3": ', (arr) => {
	rl.question('Please enter the number of rotations ? ', (num) => {
		console.log('');
		console.log('The rotated array is: ', getRotatedArray(arr, num));
		console.log('');

		rl.close();
	});
	
});


function rotatedArray (arr) {
	var arrRotated = [];
	var lastEl = arr[arr.length - 1];

	for (var j = 0, len = arr.length; j < len; j++) {
		if (arr.indexOf(arr[j - 1]) === -1) {
			arrRotated[j] = lastEl;
		} else {
			arrRotated[j] = arr[j - 1];
		}
	}

	return arrRotated;
}

// For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].
function getRotatedArray (arr, numOfRotations) {
	// Convert the passed string to array
	arr = arr.split(',');

	if (arr === 'undefined' || (toString.call(arr) !== '[object Array]') || arr.length < 2) {
		return "The passed array should be a valid array and should have at least 2 elements";
	}


	if (numOfRotations === 'undefined' || !Number.isInteger(parseInt(numOfRotations)) || numOfRotations < 0 || numOfRotations > 100) {
		return "The number of the rotations should be within the range [0..100].";
	}

	for (var i = 0; i < numOfRotations; i++) {
	 	// arr = rotatedArray(arr);
	 	arr = function (arr) {

	 		var arrRotated = [];
	 		var lastEl = arr[arr.length - 1];

	 		for (var j = 0, len = arr.length; j < len; j++) {
	 			if (arr.indexOf(arr[j - 1]) === -1) {
	 				arrRotated[j] = lastEl;
	 			} else {
	 				arrRotated[j] = arr[j - 1];
	 			}
	 		}

	 		return arrRotated;
	 	}(arr);
	}

	return arr;
}