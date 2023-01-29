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

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr){
    let sum = 0;
    if(arr.length > 0){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > 0){
                sum += arr[i]
            }
        }
    }
    return sum
}

positiveSum([])

/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function findAverage(arr){
    let sum = 0;
    let average = 0;
    if(arr.length > 0){
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        average = sum / arr.length;
    }
    return average;
}

findAverage([])

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    if(bmi <= 18.5){
        return "Underweight"
    }

    if(bmi <= 25.0){
        return "Normal"
    }

    if(bmi <= 30.0){
        return "Overweight"
    }

    if(bmi > 30){
        return "Obese"
    }
}

bmi(72, 1.86) // kg and m

/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. 
*/

function evenOrOdd(number) {
    if(number % 2 === 0){
        return "Even"
    }
    if(number % 2 != 0){
        return "Odd"
    }
}

evenOrOdd(14)

/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {
    let b;
    if(number === 0){
        b = Number(number)
    } else if(number < 0){
        let a = String(number)
        let c = a.substring(1)
        b = Number(c)
    } else{
        let a = '-' + number
        b = Number(a)
    }
    console.log(b)
    console.log(typeof(b))
}

opposite(-12525220.3325)

/*
Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x){
    let a = x.replaceAll(" ","");
    return a
}

noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
    let array = []
    for(let i = 0; i < x.length; i++){
        let a = x.slice([i], [i + 1])
        array.push(a)
    }
    array.map(elem =>{
        let index = array.indexOf(elem)
        if(elem >= 5){
            array[index] = 1
        }
        if(elem < 5){
            array[index] = 0
        }
    })
    let string = String(array)
    let newString = string.replaceAll(",", "")
    return newString
}

fakeBin('45385593107843568')

/* 
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/

function smash(words){
    let convert = String(words)
    let str = convert.replaceAll(',', ' ')
    return str
}

smash(['hello', 'world', 'this', 'is', 'great'])

/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
*/

function DNAtoRNA(dna){
    let rna = dna.replaceAll('T', 'U')
    console.log(rna)
}

DNAtoRNA('GCAT')

/*
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
 */

var countSheep = function (num){
    let str = ''
    for(let i = 0; i < num; i++ ){
       str += `${i+1} sheep...`
    }
    return str
}

countSheep(5)

/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F' 
*/

function getGrade (s1, s2, s3) {
    let sum = s1 + s2 + s3
    let aver = sum / 3
    if(0 <= aver && aver < 60){
        return 'F'
    }
    else if(60 <= aver && aver < 70){
        return 'D'
    }
    else if(70 <= aver && aver < 80){
        return 'C'
    }
    else if(80 <= aver && aver < 90){
        return 'B'
    }
    else if(90 <= aver && aver <= 100){
        return 'A'
    }
}

getGrade(100, 100, 100)