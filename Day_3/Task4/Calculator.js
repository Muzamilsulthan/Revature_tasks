let sum=(a,b)=> a+b;
let sub=(a,b)=>a-b;
let multi=(a,b)=>a*b;
let div=(a,b)=>a/b;
let mod=(a,b)=>a%b;

function calculator()
{
    let num1=Number(prompt("Enter First Number"));
    let num2=Number(prompt("Enter second Number"));
    
    let operation=Number(prompt(`choose number between[1-5]
    1 for addition
    2 for subtraction
    3 for multiplication
    4 for devision
    5 for modules`));

    switch(operation)
    {
        case 1: document.writeln(`sum of ${num1} + ${num2} = ${sum(num1,num2)}`);
                break;
        case 2: document.writeln(`sub of ${num1} - ${num2} = ${sub(num1,num2)}`);
                break;
        case 3: document.writeln(`multiplication of ${num1} * ${num2} = ${multi(num1,num2)}`);
                break;
        case 4: document.writeln(`division of ${num1} / ${num2} = ${div(num1,num2)}`);
                break;
        case 5: document.writeln(`modulus of ${num1} % ${num2} = ${mod(num1,num2)}`);
                break;
        default: alert("Enter valid number between[1-5]");
    }
}

calculator();
