const randomNumber = Math.floor(Math.random() * 100) + 1;
let flag="true";

while(flag=="true")
{
    const userNumber=Number(prompt("Guess the Number between[1-100]"));

    if(randomNumber==userNumber)
    {
        alert("YES Correct You Win");
        flag="false";
    }
    else if(userNumber>randomNumber)
    {
        alert(`${userNumber} is Greater Than Correct Number`)
    }
    else if(userNumber<randomNumber)
    {
        alert(`${userNumber} is Lesser Than Correct Number`)
    }
    else{
        alert("Please Enter the number between[1-100]")
    }
}

