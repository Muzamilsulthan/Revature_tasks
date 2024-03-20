let userYear=Number(prompt("Enter the Year [Ex-2000]"));
if(userYear%400==0 || (userYear%4==0 && userYear%100!=0))
{
    alert("Leap Year");
}
else
{
    alert("Not a Leap Year");
}