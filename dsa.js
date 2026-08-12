// sum of integers (addition)

let a =25;
let b =50;

console.log(a+b) // 75
console.log("some of 25 and 50 is " +(a+b)) //some of 12 and 50 is 75  (addition)
console.log("some of 25 and 50  " + a+b) //some of 12 and 50 is 2550 (Concatenation )
console.log(+a+b + "some of 25 and 50" ) // 75 some of 25 and 50



// sum of integer and string (Concatenation = combining strings.)

let c= 12;
let d= "50";

console.log(c+d) // 1250

//type coercion
//JavaScript automatically converts a value from one data type to another when needed

console.log("5"+2) // 52
console.log("5"-2) // 3 when substraction comes   js conververt the string in to number 
console.log("5"/2) // 2.5
console.log("5"*2) // 10


// Type casting 
//it  means manually converting a value from one data type to another.

let age = prompt("enter your age") //prompt() → mainly browser JavaScript , readline → Node.js terminal input
console.log(age); //you will get the enterd age as string because prompt() only take string values 

let age = Number (prompt("enter your age")) //now you will get age as number 
console.log(age); 

let age =  (prompt("enter your age")) 
age =Number(age) 
console.log (typeof(age)) //type is number because age converted in to number type but  Number("jasi") it's out put get NaN

Swapping 
//First method (swapp variable with extra variable )

let x =10 
let y=20
let z

z = x //z=10,x=10
x = y //x=20,y=20
y = z //y=10,z=10

console.log(x,y) //it's swapp like x=20 and y=10

//second method (swap without variable )

x = x + y  // 10+20 =30 
y = x- y  // 30 - 20 =10
x = x -y  // 30-10 =20

console.log (x,y) // x=20 and y=10


//Third method 
//it's swapping like destructuring

[x,y] = [y,x]
console.log(x,y) // 20,10

