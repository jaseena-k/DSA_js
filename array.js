//Array

// let arr = []
// arr.push(10)
// arr.push(20)
// arr.push(30)
// arr.push(40)
// arr[7]=70      //[ 10, 20, 30, 40, <3 empty items>, 70 ]
// arr.push(80)   // [ 10, 20, 30, 40, <3 empty items>, 70, 80 ]
// arr.pop()      //[ 10, 20, 30, 40, <3 empty items>, 70 ] remove the last index
// console.log(arr);

// //sum of array 

// let arr =[10,20,30,40,50]
// let sum =0
// for(i=0;i<arr.length;i++){
//     sum = sum +arr[i]

// }
// console.log(sum); // 150

// //find max value

// let num =[30,70,205,70,28]
// let max =num[0]

// for(let i=1;i<num.length;i++){
//     if(max<num[i]){
//         max=num[i]

//     }
    
    
// }
// console.log(max);

// find 2nd max value

// let arr = [20,87,56,40,30]
// let max = Math.max(arr[0],arr[1]) 
// let sMax = Math.min(arr[0],arr[1])

// for (let i=2;i<arr.length;i++){
//     if(arr[i]>max){
//         max =arr[i]

//     }else if(arr[i]>sMax){
//         sMax=arr[i]
        
//     }

// }
//         console.log(sMax); //56
        


// array reverse



// let arr =[20,70,50,30,27]
// let i =0 ,j=arr.length-1

// while(i !== j){
//     let temp =arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     i++
//     j--
// }
// console.log(arr); // [ 27, 30, 50, 70, 20 ]


// 2nd method

// let arr =[33,6,88,76,90]
// let temp =new Array(arr.length)

// let j=0

// for( let i =arr.length-1 ;i>=0;i--){
//     temp[j]=arr[i]
//     j++
// }
// console.log(temp);

//all zero to left and all one to right

let arr=[1,0,0,1,1,0,1,0]
let i=0 ,j=0

while(i<arr.length){
    if (arr[i]==0){
        let temp =arr[i]
        arr[i]=arr[j]
        arr[j]= temp
        j++

    }
    i++
}
console.log(arr);

