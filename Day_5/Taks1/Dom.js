// 1.Create 1 div with id:mainDiv, 2 Paragraph with class:para. select them using id selector and class selector and chage their color text color to red.

let mainDiv=document.getElementById("mainDiv").style.color="red";

let classpara=document.querySelector(".para").style.color="red";

// 2.Create 4 divs with size 100x100px with bg-color:red;
//    - When I click on 1st div change the bg-color.
//    - When the mouse comes in the second div area change the bg-color.
//    - When user clicks on 3rd div add an image in the backgroud.
//    - When the user clicks on 4th div change the size of div.

let div1=document.getElementById("div1");
div1.addEventListener("click",()=>{
    div1.style.backgroundColor="black";
})

let div2=document.getElementById("div2");
div2.addEventListener("mouseover",()=>{
    div2.style.backgroundColor="violet";
})

let div3=document.getElementById("div3");
div3.addEventListener("click",()=>{
    let a=document.createElement("img");
    a.src="https://previews.123rf.com/images/artshock/artshock1209/artshock120900045/15221647-imag-of-heart-in-the-blue-sky-against-a-background-of-white-clouds.jpg"
    a.style.width="100px";
    a.style.height="100px"
    div3.appendChild(a);
})

let div4=document.getElementById("div4");
div4.addEventListener("click",()=>{
    div4.style.width="200px";
    div4.style.height="200px";
})


// 3.Create a div with "demo text" inside it now when I click on that div the text should get chaged to "I got clicked" and chagen the backgroud color of that div to pink.

let div5=document.getElementById("div5");
div5.addEventListener("click",()=>{
    div5.innerHTML="I got clicked";
    div5.style.backgroundColor="pink";
})


// 4.Create a p tag inside it initially shwo 0. Then create 2 buttons to increment or decreament it by 1
let count=0;
let div7=document.getElementById("task4");

let div6=document.getElementById("but1");
div6.addEventListener("click",()=>{
    div7.innerHTML=count++;   
})

let div8=document.getElementById("but2");
div8.addEventListener("click",()=>{
    div7.innerHTML=count--;   
})

// 5.Create an array with 3 userObjects: name, city , age. put those in an array.
    // Now in HTML page. Create an empty div tag: <div></div>
    // and below this div tag create an button.
    // Now when the user clicks on that button. The names present in all those 3 obj should get printed with <h1>
 
    // after clicking your div should look like this:
    // <div>
    //     <h1>name<h1>
    //     <h1>name<h1>
    //     <h1>name<h1>
    // </div>

let arr=[{name:"Mujamil",age:22,city:"chennai"},
{name:"saad",age:22,city:"chennai"},
{name:"faizan",age:22,city:"chennai"}];

let names=document.getElementById("task5");
let div9=document.getElementById("but3");
div9.addEventListener("click",()=>{
    for(i=0;i<arr.length;i++)
    {
        let h1=document.createElement("h1");
        h1.innerHTML=arr[i].name;
        names.appendChild(h1);
    }
      
})
