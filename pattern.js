// print two console items in one line using process.stdout.write
//install npm prompt-sync for working prompt in  terminal

// process.stdout.write("Hello");
// process.stdout.write(" World");

// pattern -like rows and columns



let num = prompt("Enter  a number: ");

for(let i=1;i<=num;i++){
    for(let j=1 ;j<=num ; j++){
        process.stdout.write("* ")
    }
    console.log();
    
}

right  triangle

let n= prompt("Enter  a number: ");

for(let i=1;i<=n;i++){            // row depens on number of n and when main loop not working it's goto outer console
    for(let j=1 ;j<i ; j++){
        process.stdout.write("* ")
    }
    console.log();
}

number pattern like right triangle

let n= prompt("Enter  a number: ");

for(let i=1;i<=n;i++){            
    for(let j=i ;j<=n; j++){
        process.stdout.write(j +"")
    }
    console.log();
}


alphabet right angle

let n= prompt("Enter  a number: ");

for(let i=1;i<=n;i++){    
    let ascii =65        
    for(let j=1;j<=i; j++){
        process.stdout.write(String.fromCharCode(ascii) +"")
        ascii++
    }
    console.log();
}


// inverted right triangle

let n = prompt("enter a number ")

for (let i=1; i<=n;i++){
    
    // invert
    for (let j=1 ; j<=n-i;j++){
         process.stdout.write(" ")
       }

    // right 
    for(let j=1; j<=i;j++) {
         process.stdout.write("*")
    } 
    console.log();
    
}

X pattern 

const prompt = require("prompt-sync")();  
let n = Number(prompt(("enter a number ")))

for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){

        if(i==j || i+j == n+1 ){
            process.stdout.write("* ")
        }
        else process.stdout.write("  ")
        
    }
    console.log();
    
}

V pattern 

const prompt = require("prompt-sync")();  
let n = Number(prompt(("enter a number ")))

for(let i=1;i<=n;i++){
    for(let j=1;j<=2*n-1;j++){

        if(i==j || i+j == 2*n ){
            process.stdout.write("* ")
        }
        else process.stdout.write("  ")
        
    }
    console.log();
    
}
