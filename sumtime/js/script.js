function sum(a,b) {
    var numA = parseInt(a);
    var numB = parseInt(b);
    res = numA + numB;
    document.write("<h1>The answer is " + res + ".</h1>");
}

sum(prompt("Please enter first number"),prompt("Please enter second number"));