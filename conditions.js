// // contitional statement 
// //Q - valied voter

let age = Number(prompt("eneter your age ?"))

if (isNaN=(age)){
    console.log("wrong answer");
    
}

else if  (age >=18){
    console.log("you can vote ");
    
}
else{
    console.log("you can't vote");
    
}

// // Q - shop discound  (find payable bill with discound)

let amount = Number(prompt("what is the final amount")) // 6500
dis :0

if(amount>0 && amount>=5000){
    dis=0

}
else if(amount>0 && amount>=5000){
    dis=5
    
}
else if(amount>0 && amount>=5000){     // payable amount 5850 and discound from 6500 of 10% it's 650
    dis =10
    
}
else if(amount>0 && amount>=5000){
    dis=20
    
}
console.log(amount - Math.floor(dis*amount)/100)



//Q - bijili bill

let unit =700 //Number(prompt("enter your electricity unit ")) //700
let amount =0
if (unit>400){
    amount = (unit-400) * 13 // 3900
    unit= 400
    
}
if(unit>200 && unit<=400){
    amount = (unit-200) * 8 // 1600
    unit = 200

}
if(unit>100 && unit<=200){
    amount = (unit-100)*6 //600
    unit =100

}
amount += unit * 4

console.log(amount); //1000


// INR denomination 

let amount = 4567

if (amount>=500){
    console.log("500 note is " + Math.floor(amount/500));
    amount =amount%500
    
}if (amount>=200){
    console.log("200 note is " + Math.floor(amount/200));
    amount =amount%200
    
}
if (amount>=100){
    console.log("100 note is " + Math.floor(amount/100));
    amount =amount%100
    
}
if (amount>=50){
    console.log("50 note is " + Math.floor(amount/50));
    amount =amount%50
    
}
if (amount>=10){
    console.log("10 note is " + Math.floor(amount/10));
    amount =amount%10
    
}
if (amount>=5){
    console.log("5 note is " + Math.floor(amount/5));
    amount =amount%5
    
}
if (amount>=2){
    console.log("2 note is " + Math.floor(amount/2));
    amount =amount%2
    
}

console.log(amount);



 