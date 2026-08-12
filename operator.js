//operators (arithmatic)

let a = 9
let b = 4

console.log (Math.floor(a/b)) // if we diveded acually get 2.25..but when we used  math.floor you will get without point
console.log (a%b)

//logical operators (= , == .=== !==)

a = 13 //it assign
13 == 13.  //it equal so it's true
13 == "13"  //it also true because only check value
13 === "13"  //it false becuase it' aslo check data type

// && , ||

console.log(10>5 && 7>9) //false ,because using && operater when all contitions  will true answer should be true other ways it's false 
console.log(10<11 && 7>3) //true
console.log(4>6 || 3>7||8<9) //it's true because in || operator one condition will true the answer should be true othe ways false
console.log(6>7||2>4) //false because all conditions are false

//Unery operator (++ ' --)

let a = 10 
let i = 11
let b =true

console.log(a++) //11 post ingrement 
console.log(i++ + ++i) // answer is 24 (11+1 + 1+11 =24)
console.log(b++) // answer is 2 becuase value of true in js is 1 so it's incriment gets 2
let c = false
c++ 
console.log(c); // answer is 1 because fasle value in js is 0
