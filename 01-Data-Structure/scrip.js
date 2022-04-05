let numeric1 = 5 ;
console.log(typeof numeric1); 

let numeric2 = -3 ;
console.log(typeof numeric2); 

let numeric3 = 0 ;
console.log(typeof numeric3); 
/* - */
let numeric4 = 5.0 ;
console.log(typeof numeric4); 

let numeric5 = -3.1 ;
console.log(typeof numeric5); 

let numeric6 = 0.0 ;
console.log(typeof numeric6); 

function add(a,b) {
    return a + b
};
console.log(add(3,5));
console.log(typeof add(3,5));

function subtract(a,b) {
    return a - b
};
console.log(subtract(10,5))
console.log(typeof subtract(10,5))

function multiply(a,b) {
    return a * b
};
console.log(multiply(10,5))
console.log(typeof multiply(10,5))

function devide(a,b) {
    return a / b
};
console.log(devide(10,5))
console.log(typeof devide(10,5))

const logic1 = true;
console.log(logic1);
console.log(typeof logic1);

const logic2 = false;
console.log(logic2);
console.log(typeof logic2)

let and = logic1 && logic2 ;
console.log(and)
console.log(typeof and);

let or = logic1 || logic2 ;
console.log(or);
/* ------- Sring */

let string1 = 'JavaScrip' ;
console.log(typeof string1);
console.log(string1[0]);
console.log(string1[1]);
console.log(string1[-1]);
console.log(string1[-2]);
console.log(string1[4]);
console.log(string1[5]);
console.log(string1[1]);
console.log(string1.length);
console.log(string1.includes('v'));

let upperCase = string1.replace('a','A');
console.log(upperCase)

let sentence = 'we love JavaScrip' ;
const words = sentence.split(' ');
console.log(words)

let str1 = 'fri';
let str2 = 'day';
console.log(str1 + str2);

/* --------- List ----- */