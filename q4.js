const data=require("./food.json");
let data1= data.filter(e=>{
    return e.category="Protein";
})
console.log(data1);