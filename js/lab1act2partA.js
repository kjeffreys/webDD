/*
* Create a Javascript-based prefix calculator.
* 
* Expressions will be written with JSON.
*
*/
"use strict";

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

var exec = function(objArray)
{
    let temp = new Calc();

    for(let i = 0; i < objArray.length; i++)
    {
        //assuming "exp is provided"
        let str = JSON.stringify(objArray[i].exp);
        console.log(temp.calc(str) + " : " + objArray[i].expected)

    }

}