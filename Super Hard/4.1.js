// Read about Bubble Sort, and write a JavaScript function to apply Bubble Sort algorithm. 
// Sample input [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213], 
// and output [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1].

function BubbleSort(N) {
    var l = N.length
    for (i = 0; i <= l-1; i++) {
        for (j = 0; j <= l-1-i; j++) {
            if (N[j] < N[j+1]) {
                k = N[j]; N[j] = N[j+1]; N[j+1] = k;
            }
        }
    }
    return N;
}

var masiv = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log(BubbleSort(masiv));
