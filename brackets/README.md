# Brackets

Brackets is a task to create a function which accepts a string and returns 1 if it's properly nested or 0 if it's not.
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

 - S is empty;
- S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
- S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

## Install

```
Install NodeJS (https://nodejs.org/en/)
```

## Run

```
node brackets.js (via cmd in the same dir as the file)
```