// Power of two algorithms
// give a positive integer 'n' ,determine if the number is power of 2 or not 
// Big-O = O(logn)

function isPowerOfTwo(n){

    if(n<1){
        return false
    }
    while(n>1){
        if(n%2 !==0){
            return false
        }
        n = n/2 
    }
    return true

}

console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(4)); //true
console.log(isPowerOfTwo(5)); //false

// Bitwise Power of two

function isPowerOfTwoBitwise(n){
    if (n<1){
        return false
    }
     return n=(n& (n-1)) ==0

}

console.log(isPowerOfTwoBitwise(1)); //true
console.log(isPowerOfTwoBitwise(4)); //true
console.log(isPowerOfTwoBitwise(5)); //false