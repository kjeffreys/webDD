/*
* Create a Javascript-based prefix calculator.
* 
* Expressions will be written with JSON.
*
*/
console.log("TESTING calc()")
var c = new Calc();

console.log(c.calc('{"op":"add", "number": 0}'));
console.log(c.calc('{"op":"add", "number": 0}'));
console.log(c.calc('{"op":"add", "number": 0}'));
console.log(c.calc('{"op":"add", "number": 0}'));
console.log(c.calc('{"op":"add", "number": 0}'));
console.log(c.calc('{"op":"add", "number": 0}'));

console.log('\n\n\n\n')

// Testing exec()
console.log("TESTING exec()")

var expA = 
{
    {"exp": {"op":"add", "number:0"}, "expected": 0}
    {"exp": {"op":"add", "number:0"}, "expected": 0}
    {"exp": {"op":"add", "number:0"}, "expected": 0}
    {"exp": {"op":"add", "number:0"}, "expected": 0}
    {"exp": {"op":"add", "number:0"}, "expected": 0}
    {"exp": {"op":"add", "number:0"}, "expected": 0}

}

let val = exec(expA);