const data=require("./food.json");
let data1=data.filter(e=>{
    return e.category="Grain";
})
console.log(data1);