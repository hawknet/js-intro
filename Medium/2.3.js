// Write a JavaScript function that generates all combinations of a string. 
// For i.e. input dog, should respond with d,do,dog,o,og,g.

//  метод split(s), который позволяет превратить строку в массив, разбив ее по разделителю s

// Вызов arr.join(str) делает в точности противоположное split. 
// Он берет массив и склеивает его в строку, используя str как разделитель.

// push - Добавляет элемент в конец массива


function gencombinations (mystring) {
    var myarray1 = mystring.split("");
    var myarray2 = [];
    var temp = "";

    for (i=0; i<mystring.length; i++) {
        temp = mystring[i];
        myarray2.push(temp);

        for (j=i+1; j<mystring.length; j++) {
            temp += mystring[j];
            myarray2.push(temp);
        }
        //console.log(myarray2);
    }
    return myarray2.join(",");
}

console.log(gencombinations("dog"));   //"d,do,dog,o,og,g"