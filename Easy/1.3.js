// Write a function that returns average number of values. Do not use Math. For i.e. [1,4,2] should return [2.33].

function average(n) {
    sum = 0;
    for (i=0; i < n.length; i++) {
        sum += n[i];
    }
    return (sum / n.length);
}

var myarray = [1,4,2];

console.log(myarray);
console.log('average: ' + average(myarray));