// Write a function that returns only pair numbers. For i.e. input [1,5,23,4,2,5,6] should return [4,2,6].

var myarray = [1,6,8,3,5,0,12,66,133,998,-26,-4];

function pair_numbers(n) 
{
    var resarray =[];
    for (i=0; i<n.length; i++) {
        if (n[i] % 2 == 0 && n[i] !== 0 ) {resarray.push(n[i]);}
    }
    return resarray;
}

console.log(pair_numbers(myarray));
