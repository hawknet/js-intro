// Write a function that reverse a number. For i.e. input 32243 should returns 34223.

function reverse(n) {
    nString = String(n);
    var mString = '';
    
    for (i=nString.length-1; i>=0; i--) {
        //console.log(nString.charAt(i));
        mString += nString.charAt(i);
    }
    return Number(mString);
}

var n = 123456;

console.log ( typeof n );
console.log(n) ;

console.log(typeof reverse(n));
console.log( reverse(n));
