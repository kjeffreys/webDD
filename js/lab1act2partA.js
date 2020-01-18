/*
* Create a Javascript-based prefix calculator.
* 
* Expressions will be written with JSON.
*
*/

/*

Including test in comments for example of how function
must accept inputs

Tests will be run from lab1act2partA_test1.js

console.log("TESTING calc()")
var c = new Calc();

console.log(c.calc('{"op":"add", "number": 0}'));
console.log(c.calc('{"op":"add", "number": 0}'));
console.log(c.calc('{"op":"add", "number": 0}'));
console.log(c.calc('{"op":"add", "number": 0}'));
console.log(c.calc('{"op":"add", "number": 0}'));
console.log(c.calc('{"op":"add", "number": 0}'));

console.log('\n\n\n\n')
*/
/*
* Implementing a test function for testing nodeJS in simple case
* before proceeding to other potential solutions/problems
*/
function Calc()
{
    this.result = 0;
    
    

    this.calc = function(jsonString)
    {
        let  calcString = JSON.parse(jsonString);
        let operator = calcString.op
        let operand = calcString.number

        if(operator == "add")
        {
            this.result = this.result + operand;
        }

        if(operator == "subtract")
        {
            this.result = this.result - operand;
        }

        return this.result;

    } //end calc()
}

/*
Including test in comments for example of how function
must accept inputs

Tests will be run from lab1act2partA_test1.js

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
*/