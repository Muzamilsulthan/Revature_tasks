var formdata=document.getElementById("formdata");

let arr=[];

formdata.addEventListener("submit",()=>{
    event.preventDefault();
    let obj={
        name:document.getElementById("fname").value,
        password:document.getElementById("pass").value
    }
    arr.push(obj);
    document.getElementById("fname").value="";
    document.getElementById("pass").value="";
})

var data=document.getElementById("but1");
data.addEventListener("click",()=>{
    for(i=0;i<arr.length;i++)
    {
        let h1=document.createElement("h1");
        let h11=document.createElement("h1");
        document.getElementById("data").appendChild(h1);
        document.getElementById("data").appendChild(h11);
        h1.textContent=arr[i].name;
        h11.textContent=arr[i].password;
    }
})


