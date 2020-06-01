function howManyLetters(x) {
    var answer = x.length;
    document.write("<h1>This string is " + answer + " characters long.</h1>")
    document.write("<p>Input was '" + x + "'.</p>")
}

howManyLetters(prompt("Enter string to determine length."))
