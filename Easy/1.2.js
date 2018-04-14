// Write a function that returns min and max numbers. For i.e. input [1,92,-5,25] should return {max:92, min:-5}.

function MinMax(n) {
    var min, max;
    min = n[0]; 
    max = min;
    for (i=1; i < n.length; i++) {
        if ( min > n[i] ) {min = n[i]};
        if ( max < n[i] ) {max = n[i]};
    }
    return('min:' + min + ', ' + 'max:' + max);
}

var myarray = [1,6,8,3,5,0,12,66,133,998,-26,-4];

console.log(MinMax(myarray));

//console.log('max number = ' + Math.max(...myarray));
//console.log('min number = ' + Math.min(...myarray));