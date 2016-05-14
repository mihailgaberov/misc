'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question('Input: ', (arr) => {
	console.log('');
	
	console.log('Output: ', solution([1, 4, -1, 3, 2]));
	console.log('Output: ', solution([1, 4, 1, 3, 2, -1]));
	console.log('Output: ', solution([-1, 3, 4, 3, 4, 1, 3, 2]));
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
		var obj = {};
		if (arr[i] !== -1) {
			obj.data = arr[i];
			obj.next = arr[arr[i]];
			list.push(obj);
		} else {
			passed = true;
			arr.splice(i, 1);
		}
	}

	if (passed)
		list.push({data:-1, next: null});
    

    list = list.filter(function (arg) {
    	return arg.data != undefined;
    });

    return list.length;
}