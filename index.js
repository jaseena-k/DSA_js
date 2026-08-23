//Math algorithms
// Fibonacci (Q - Give a number 'n' and find the first 'n' elemnets of fibonacci sequence)
// it's O(n) linear time complexity because value of n increases no.of times 8 the line exicutes also increases

// function fibonacci(n){
//     let fib =[0,1]

//     for(let i =2 ;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }

//     return fib


// }

// console.log(fibonacci(3)) //[ 0, 1, 1 ]   add with preceading 2 numbers 
// console.log(fibonacci(4)) //[ 0, 1, 1, 2 ]
// console.log(fibonacci(5)) // [ 0, 1, 1, 2, 3 ]

//Factorial
//Give an integer 'n' find the factorial of the integer
//big O - 0(n) -linear

// function factorial(n){
//     let result = 1
//     for(let i=2 ;i<=n;i++){
//         result = result * i
//     }
//     return result
// }

// console.log(factorial(0)) 
// console.log(factorial(5)) 

// isPrime

function isPrime(n) {
    if (n < 2) {
        return false
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(5)); // true


