// Write a function that implements Pythagorean theorem.

function pifagor (a, b) {
    var a, b, c;
    if (a > 0 & b > 0) {
        c = Math.sqrt( Math.pow(a,2) + Math.pow(b,2) );
        return(c);
    } else { return("невірні вхідні дані")}
}

console.log("side C = ", pifagor(10 , 4) );

