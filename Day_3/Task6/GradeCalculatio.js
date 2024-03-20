let c=Number(prompt("Enter your marks in c programming"));
let sql=Number(prompt("Enter your marks in sql programming"));
let java=Number(prompt("Enter your marks in java programming"));
let js=Number(prompt("Enter your marks in java script programming"));
let python=Number(prompt("Enter your marks in python programming"));

let sum=c+sql+java+js+python;
let grade=sum/5;

if(grade>=90)
{
    alert("Your grade is A");
}
else if(grade>=80 && grade<=89)
{
    alert("Your grade is B")
}
else if(grade>=70 && grade<=79)
{
    alert("Your grade is C")
}
else if(grade>=60 && grade<=69)
{
    alert("Your grade is D")
}
else{
    alert("You Failed ! Try Again");
}