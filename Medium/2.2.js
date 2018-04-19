//  Write a function that returns reversed string. For i.e. input "hello world" should return "dlrow olleh".

function reverse(s) {
    var rString = "";
    
    for (i=s.length-1; i>=0; i--) {
        rString += s.charAt(i);
    }
    return rString;
}

console.log(reverse("hello world"));  //dlrow olleh