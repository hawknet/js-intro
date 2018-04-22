// Write a recursion function that logs numbers from N to 0. 
// Read about recursion function in javascript before implementing this. Do not use "for", 
// function should call itself.

function recursive (n) {  
    if (n>=0){
        console.log(n); 
        recursive (n-1);
    }
}

recursive(12);
