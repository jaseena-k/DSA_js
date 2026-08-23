// Array advanced questions
//left and  right rotation by 1
const prompt = require("prompt-sync")();

// let arr =[7,9,2,6,8,6]

// let copy = arr[arr.length-1]

// for (let i = arr.length-1;i>0;i--){
//     arr[i]=arr[i-1]
// }
//     arr[0] =copy
// console.log(arr); //[ 6, 7, 9, 2, 6, 8 ]

// // Nested looping

// for(let j =1 ;j<=4;j++){
//     console.log(j+ "exicution ");

//     for(let i=1;i<=3;i++){
//         console.log("helo");
        
//     }
    
// }

// left and right rotation by k value

// let arr=[1,2,3,4,5]
// let k =Number(prompt("enter the value of k"))
// k =k % arr.length-1


// for (let j = 0 ;j<k;j++){

//     let copy =arr[0]

//     for (let i=0;i<=arr.length-1;i++){
//         arr[i]=arr[i+1]

//     }

//     arr[arr.length-1]=copy

// }
// console.log(arr);


// remove duplicut from sorted array 

let nums=[1,2,1,1,0,2,2]

let j = 1

for(let i = 0;i<nums.length-1;i++){
    if(nums[i]!=nums[i+1]){
        nums[j]=nums[i+1]
        j++

    }
   
    
}
 console.log(nums);