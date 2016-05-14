'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question('Input: ', (arr) => {
	console.log('');
	
	console.log('Output: ', solution([1, 4, -1, 3, 2]));
	// console.log('Output: ', solution([1, 4, 1, 3, 2, -1]));
	// console.log('Output: ', solution([-1, 3,4,3,4, 1, 3, 2]));
	console.log('');
	rl.close();
});

function solution (arr) {
	if (arr === 'undefined' || (toString.call(arr) !== '[object Array]') || arr.length === 0) {
		return 0;
	}

	var z = 0;
	while (z < arr.length) {
		if (!Number.isInteger(arr[z])) {
			return 0;
		}
		z++;
	}
	var len = arr.length,
		i,
		list = [],
		passed = false;

	for (i = 0; i < len; i++) {
		if (arr[i] !== -1) {
			list[i] = arr[i];
		} else {
			passed = true;
			arr.splice(i, 1);
		}
	}

	if (passed)
		list.push(-1);
    

    list = list.filter(function (arg) {
    	return arg != undefined;
    }); 

    console.log('list: ', list);

    return list.length;
}