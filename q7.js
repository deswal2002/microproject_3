const data=require("./food.json");
let data1=data.filter(e=>{
    return e.category="Dairy";
})
console.log(data1);