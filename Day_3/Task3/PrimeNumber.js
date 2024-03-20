function prime(num)
{
    let count=0;
    let i=0;
    while(i<=num)
    {
        if(num%i==0)
        {
            count+=1;
        }
        i++;
        }
    if(count==2)
    {
        console.log(num +" is a Prime number");
    }
    else
    {
        console.log(num +" is Not a Prime number");
    }
}

function overall(num)
{
    for(i=1;i<=num;i++)
    {
        prime(i);
    }
}

overall(25);