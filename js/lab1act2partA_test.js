/*
* Tests for lab1act2partA.js
*
*/

console.log("TESTING calc()")
var c = new Calc();

/*
console.log(c.calc('{"op":"add", "number": 0}')); //should return 0
console.log(c.calc('{"op":"add", "number": -1}')); //should return -1
console.log(c.calc('{"op":"subtract", "number": -1}')); //should return 0
console.log(c.calc('{"op":"add", "number": 5}')); //should return 5
console.log(c.calc('{"op":"subtract", "number": 10}')); //should return -5
console.log(c.calc('{"op":"add", "number": 15}')); //should return 10
*/

console.log(c.calc('{"op":"add", "number": 5}')); //should return 5
console.log(c.calc('{"op":"subtract", "number": 2}')); //should return 3
console.log(c.calc('{"op":"add", "number": 19}')); //should return 22

console.log('\n\n')

// Testing exec()
console.log("TESTING exec()")


var expA = 
[
    {"exp": {"op":"add", "number": 0}, "expected": 0},
    {"exp": {"op":"add", "number": -1}, "expected": -1},
    {"exp": {"op":"subtract", "number": -1}, "expected": 0},
    {"exp": {"op":"add", "number": 5}, "expected": 5},
    {"exp": {"op":"subtract", "number": 10}, "expected": -5},
    {"exp": {"op":"add", "number": 15}, "expected": 10}

]

let val = exec(expA);
