// Q1. Find number 2 in the following array. If 2 is present, print its index in the array. If 2 is not present, display the message "Element not found in array".
// arr = [1, 2, 3, 4, 5, 6];

const arr=[2,1,3.4,5,6];

for(let ele in arr)
{
    if(arr[ele]==2)
    {
        console.log(ele);
        break;
    }
    else
    {
        console.log("Element not found in array");
    }
}


// Q2. Remove "apple" from the following array:
// const fruits = ["banana", "mango", "apple", "kiwi"];

const fruits= ["banana", "mango", "apple", "kiwi"];
fruits.splice(2,1);
console.log(fruits);

// Q3. Reverse the order of the elements in the following array:
// const numbers = [23, 45, 12, 67, 89, 34];
 
const numbers = [23, 45, 12, 67, 89, 34];
const revNumber=[];
for(i=numbers.length-1;i>=0;i--)
{
    revNumber.push(numbers[i]);
}

console.log(numbers);
console.log(revNumber);

// Q4. Find the maximum value in the following array:
// const numbers = [23, 45, 12, 67, 89, 34];

const maxNum = [23, 45, 12, 67, 89, 34];
let max=maxNum[0];
for(i=1;i<maxNum.length;i++)
{
    if(max<maxNum[i])
    {
        max=maxNum[i];
    }
}
console.log(max);

// Q5. Create a function that takes an array of numbers and returns the second-largest number in the array:
// const numbers = [10, 5, 8, 20, 15, 12];

const arrq5 = [10, 5, 8, 20, 15, 12];

function secondLargest(...num)
{
    max=num[0];
    secondMax=num[0];
    for(i=0;i<num.length;i++)
    {
        if(num[i]>max)
        {
            secondMax=max;
            max=num[i];
        }
        else if(num[i]>secondMax && num[i]!=max)
        {
            secondMax=num[i];
        }
    }
    console.log(num);

    console .log(`without sorting method secong largest is ${secondMax}`);
    
}

secondLargest(...arrq5);


// Q6. Create a function that takes an array of numbers and returns the sum of all even numbers in the array:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrq6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(...num)
{
    let sum=0;
    for(i=0;i<num.length;i++)
    {
        if(i%2==0)
        {
            sum+=num[i];
        }
    }
    console.log(sum);
}

sum(...arrq6);


// Q7. Create a students array which contains objects of students with properties name and age. Add 3 student objects to it. 

let student =[{name:"Mujamil",age:22},{name:"saad",age:22},{name:"faizan",age:22}];
console.log(student[1].name);
console.log(student[2].age);
console.log(student);
