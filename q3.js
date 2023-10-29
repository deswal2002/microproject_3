const data=require("./food.json");
let data1=data.filter(e=>{
    return e.category="Fruit";
})
console.log(data1);