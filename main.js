/* 
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

function maps(x){
    let z = [];
    x.map(elem =>{
        let newElem = elem * 2;
        z.push(newElem);
    })
    return z;
}

maps([1, 2, 3]);

/* 
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

function booleanToString(b){
    let string = b.toString();
    return string;
}

booleanToString(true);

/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
Examples

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

function countBy(x, n) {
    let z = [];
    let counter = 0;
    for(counter; counter < n; counter++){
        let f;
        f = x + (counter * x);
        z[counter] = f;
      }
    return z;
}

countBy(1, 10);

/*
Make a simple function called greet that returns the most-famous "hello world!".
*/

function greet(elem){
    elem = "hello world!";
    return elem;
}

greet();

/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a,b) {
    let c = a + b;
    return c.toString(2);
}
 
addBinary(1, 1);

/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

function reverseSeq(n){
    let z = [];
    for(let i = 0; i < n; i++){
        a = n - i
        z.push(a);
    }
    return z;
}

reverseSeq(5);

/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

function summation(num){
    let step = 1;
    let a;
    let z =[];
    let sum = 0;
    for(let i = 0; i < num; i++){
        a = i + step;
        z.push(a);
    }
    for(let i = 0; i < z.length; i++){
        sum += z[i]
    }
    return sum;
}

summation(8);