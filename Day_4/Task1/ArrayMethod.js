let arrForMap=[1,20,30,38,50,58];
var newArray=arrForMap.map((ele)=>{
    console.log(ele+50);

})

let arrForFilter=arrForMap.filter((ele)=>{
     return ele%2==0
})

console.log(arrForFilter);

var it1={
    name:"Shoes",
    category:"footware",
    price:200
}

var it2={
    name:"Shirt",
    category:"Clothes",
    price:800
}

var it3={
    name:"Pant",
    category:"Clothes",
    price:500
}

var item=[it1,it2,it3];

var total=item.reduce((acc,ele)=>{
    var total=acc+ele.price;
    return total;
},0);

console.log(total);