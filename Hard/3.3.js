// Read about Binary Search. Implement it using JavaScript. For i.e. binarySearch(27, {from:0, to:100}), 
// should print at console log 50,25,38,31,28,27.

function binarySearch(n, {from: N1, to:N2}) {
    var myArray = []
    for (i = N1, j = 0; i <= N2; i++, j++) {
        myArray[j] = i;
        //console.log(myArray[j]);
    }

    var i = 0, j = myArray.length-1, Search;
        console.log('length ' + myArray.length);
    while (i <= j) {
        Search = Math.floor((i+j)/2)
        if (myArray[Search] == n) {
            i = j+1;
            break;
        } else if (myArray[Search] > n) {
            j = Search
        } else { i = Search}
    console.log(myArray[Search]);
    }
    return myArray[Search];
}

console.log('resault ' + binarySearch(27, {from:0, to:100}))