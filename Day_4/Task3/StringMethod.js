// 1.print the location of "my" in a string "I am enjoying my training"

let text="I am enjoying my training";
let newText=text.indexOf("my")
console.log(newText);

// 2.print the location of "m" in a string "I am enjoying my training".

let text2="I am enjoying my training";
let newText2=text2.indexOf("m");
console.log(newText2);

// 3.extract the complete string from index 3 of the string "I am enjoying my training". and store in a variable

let text3="I am enjoying my training";
let newText3=text3.slice(3);
console.log(newText3);

// 4.extract string from index 0 to 4 from the string "I am enjoying my training". and store in a variable.

let text4="I am enjoying my training";
let newText4=text3.slice(0,4);
console.log(newText4);

// 5.replace "training" with "journey" in "I am enjoying my training". and store in a variable.

let text5="I am enjoying my training";
let newText5=text5.replace("training","journey");
console.log(newText5);

// 6.Print all the characters of a string using for loop. can use charAt() or str[];

let text6="I am enjoying my training";
for(i=0;i<text6.length;i++)
{
    console.log(text6[i]);
}

// 7.store string str="a,b,c" into an array.

let str="a,b,c";
let arr=str.split(",");
console.log(arr);

// 8.remove white spaces from the string str="abc     ".

let str2="abc     ";
let newStr2=str2.trim();
console.log(newStr2);

// 9.Add two strings using the concat() function. and print them. make sure there is space between concatenated elements.has context menu

let cancate1="java ";
let cancate2="script";
let str3=cancate1.concat(cancate2);
console.log(str3);

// 10.Remove 'e' from the following string: const str = "abcedgedcve";

let str4 = "abcedgedcve"
let remove=str4.replace("e","");
console.log(str4);
console.log(remove);

// 11.Convert the following string into an array: const str = "Hello there I am jack";

let str5="Hello there I am jack";
let arr1=str5.split(" ");
console.log(arr1);
let arr2=str5.split("");
console.log(arr2);

// 12.Check if the given string is a palindrome or not: const str = "racecar";

function palindrome(str)
{
    let reverse="";
    for(i=str.length;i>=0;i--)
    {
        reverse+=str.charAt(i);
    }
    if(reverse==str)
    {
        return "Palindrome";
    }
    else{
        return "Not a palindrome";
    }
}
console.log(palindrome("racecar"));

// 13.Write a function to check if a given string is a valid email address:const email1 = "example@example.com"; const email2 = "invalid@email";

function validation(str1)
{
    if(str1.includes("@gmail.com") && !(str1[0]>0 ) && ! str1.includes(" ") && ! str1.includes("_") && !(str1[0]=="@"))
    {
        return `Valid mail ${str1}`;
    }
    else{
        return `not a valid mail ${str1}`;
    }
}

console.log(validation("muzamil@gmail.com"));
