/*
Gameplan

HTML:
()Calculator Window for operations to be shown along with result
()Number buttons for the calculator
()Operator buttons
()'=' button
()Reset or Clear button
()optional: Backspace button????

JavaScript:
()Function that captures what typed in calcWindow
()Separate function that add numbers, subtract numbers, etc.

*/


function calculate(expression) //ex. expression is 2+5 or 9*6 or 10/5
{

    var num = expression;
    var numLength = num.length;

    for (var i = 0; i <= numLength; i++)
    {
        if (expression.substr(i,1) === '+' || expression.substr(i,1) === '-' || expression.substr(i,1) === '*' || expression.substr(i,1) === '^' || expression.substr(i,1) === '/')
        {
            var operator =expression.substr(i,1);
            var firstNum = Number(expression.substr(0, i));
            var secondNum = Number(expression.substr(i+1, numLength-i));

        }
        // THANK YOU KAREN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // THANK YOU KAREN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return powerNums(firstNum, secondNum);
    }

}

function addNums(p1, p2) //addNums expects 2 parameters... p1 and p2
{
    return p1 + p2;
}
function subtractNums(p1, p2) //subtractNums expects 2 parameters... p1 and p2
{
    return p1 - p2;
}
function multiplyNums(p1, p2) //multiplyNums expects 2 parameters... p1 and p2
{
    return p1 * p2;
}
function divideNums(p1, p2) //divideNums expects 2 parameters... p1 and p2
{
    return p1 / p2;
}
function powerNums(p1, p2)
{
    return Math.pow(p1, p2);
}



function backspace()
{
    var number = document.calculator.calcWindow.value;
    var length = number.length-1;
    return number.substr(0,length);
}