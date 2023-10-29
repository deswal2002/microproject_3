const data=require("./food.json");
let data1=data.filter(e=>{
    return e.category="Nuts";
})
console.log(data1);