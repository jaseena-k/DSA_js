//math problems

console.log(Math.round(10.5));  // 10 - Round to nearest number (10.4 =9)
console.log(Math.ceil(10.1)); // 11 - Always go UP
console.log(Math.floor(10.8)); // 10 - Always go DOWN
console.log(Math.trunc(20.5)); // 20 - Remove decimal part
console.log(Math.pow(2,5)); // 32 -power (it's like 2^5)
console.log(Math.sqrt(25)); // 5 - find square root
console.log(Math.abs(-15)); // 15 - Remove negative sign(abs = absolute value = distance from 0.)
console.log(Math.max(10,50,70)); // 70 - Find the biggest number
console.log(Math.min(30,60,10)); // 10 - find the lowest number
console.log(Math.random()) // It gives a random decimal between:0 and 1 ,It can give 0, but it will never reach 1
console.log(Math.floor(Math.random()*10)) // possible results 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (random number without decimel)this method mosly ussed for otp

let num = 10.5678;

console.log(num.toFixed(1)); // 10.6  it is used to control how many digits appear after the decimal point.
console.log(num.toFixed(2)); // 10.57
console.log(num.toFixed(3)); // 10.568


//problems 

// Area of triangle by heron's  formula

let a = 5
let b = 4
let c = 3

//sqrt of s * (s-a) * (s-b) *(s-c)  s(semiparameter)
// a+b > c || a+c > b

let s = (a+b+c)/2
console.log(s)
console.log(Math.sqrt(s * (s-a) * (s-b) * (s-c)))

// find circumference of circle 

let r = 12 ;
console.log (Number((2 * Math.PI * r).toFixed(2)));
