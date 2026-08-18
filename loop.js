// Loop 

// for(let i = 200; i >= 99; i--){  //   print (200-99) i is counter variable it's loop with condition
//     console.log(i);
// }


// // sum of natuaral number 

// var pr = 5  //prompt("how much i will add")

// if (pr === null) {
//     console.log(cancelled);

// } else {
//     var n = Number(pr)


//     if (isNaN(n)) {
//         console.log("answer invalid ");

//     }
//     else {
//         if (n > 0) {
//             var sum = 0
//             for (let i = 1; i <= n; i++)
//                 sum = sum + i
//             console.log(sum);
//         } else {
//             console.log("number should be +ve and above 0");

//         }



//     }
// }


//factor of number 

// var pr = 16; // prompt("How much do you want to add?");

// if (pr === null) {
//     console.log("Cancelled");

// } else {
//     var n = Number(pr);

//     if (isNaN(n)) {
//         console.log("Invalid answer");

//     } else if (n > 0) {

//         for (var i = 1; i <= Math.floor(n / 2); i++) {

//             if (n % i === 0) {
            
//             }
    
//         }
//         console.log(n)

//     } else {
//         console.log("Number should be positive and greater than 0");
//     }
// }


// while loop    - sum of the number

// var num = 1234

// if(isNaN(num)){
//     console.log("invalid number");
    
// }
// else{
//     if(num>0){
//         var sum =0
//         while(num>0){
//             var rem = num %10
//             sum = sum + rem
//             num= Math.floor (num/10)

//         }
//         console.log(sum);
//         console.log(rem);
        
        
//     }else{
//         console.log("should be +ve number");
        
//     }
// }

// reverse the number
// var num = 1234

// if(isNaN(num)){
//     console.log("invalid number");
    
// }
// else{
//     if(num>0){
//         var rev =0
//         while(num>0){
//             var rem = num %10
//             rev = rev*10 + rem
//             num= Math.floor (num/10)

//         }
//         console.log(rev);
        
//     }else{
//         console.log("should be +ve number");
        
//     }
// }


// find random number

var random = Math.floor(Math.random()*100)+1
console.log(random);

var guess = -2
guess = Number(prompt("guess any number"))
while(guess !== random){
    if(isNaN(guess) || guess<1 || guess>100){
        console.log("try again b\w 1 and 100");
        
    }
    if(guess>random){
        console.log("number is too low ,try again");
        

    }else if(guess<random){
        console.log("number is too high ,try agin ");
        

    }
    else{
        console.log("congras and number was",guess);
        
    }
}
