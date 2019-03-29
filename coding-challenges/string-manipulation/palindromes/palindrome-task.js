'use strict'; // avoid ambiguity and sloppy errors

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Input: ', (str) => {
    console.log('');
    console.log('Output: ', isPalindrome(str));
    console.log('');
    rl.close();
});


/**
 * Tests whether or not a given string is a Palindrome
 * @param {string} stringToTest - the string to test.
 */
function isPalindrome(stringToTest) {
    var start = 0,
        end;

    // make sure we have a string.
    if (typeof stringToTest !== "string") {
        // throw if we didn't get a string
        throw new TypeError("isPalindrome() expected a string, but got " +
            Object.prototype.toString.call(stringToTest) + " instead!");
    }

    // normalize string by lowercasing and removing non-word characters
    stringToTest = stringToTest
        .toLowerCase()
        .replace(/[^a-z0–9]/ig, '');

    if (stringToTest.length === 0) {
        // warn if we have no valid characters to test
        console.log("No valid characters to test, treated as empty string" +
            "\nStack: \n" + new Error().stack);
        return true; // an empty string is a palindrome.
    }

    end = stringToTest.length - 1;
    // Compare characters from outside in. Stop when we get to the middle.
    while (start < end) {
        if (stringToTest[start] !== stringToTest[end]) {
            return false;
        } else {
            start++;
            end--;
        }
    }

    // if we get here, it's a palindrome
    return true;
}

// tests (should be in a separate file using a test framework)
console.log(isPalindrome("something that is not a palindrome") + " = false");
console.log(isPalindrome("something that is \n not a palindrome") + " = false");
console.log(isPalindrome("race \n car") + " = true");
console.log(isPalindrome("") + " = true + warn");
console.log(isPalindrome("  ") + " = true + warn");
console.log(isPalindrome("1221") + " = true");
console.log(isPalindrome("0") + " = true");
console.log(isPalindrome("racecar") + " = true");
console.log(isPalindrome("No 'x' in Nixon!") + " = true");
console.log(isPalindrome("~~!~!~") + " = true + warn");
console.log(isPalindrome("Momsie") + " = false");
console.log(isPalindrome(12)); // blow up
console.log(isPalindrome(undefined)); // blow up
console.log(isPalindrome(null)); // blow up