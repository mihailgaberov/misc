'use strict';

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question('Input: ', (str) => {
	console.log('');
	console.log('Output: ', isProperlyNested(str));
	console.log('');
	rl.close();
});

function isProperlyNested (str) {
	if (str.length === 0) {
		return 1;
	}

	var objMatched = {
		']': '[',
		'}': '{',
		')': '('
	};

	var arrToPush = ['[', '{', '('];
	var arrStack = [];

	for (var i in str) {
		if (arrToPush.indexOf(str[i]) !== -1) {
			arrStack.push(str[i]);
		} else {
			if (arrStack.length === 0) {
				return 0;
			} else if (objMatched[str[i]] !== arrStack.pop()) {
				return 0;
			}
		}
	}

	if (arrStack.length === 0) {
		return 1;
	} else {
		return 0;
	}
}