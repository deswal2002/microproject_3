const data=require("./food.json");
let data1=data.filter(e=>{
    return e.calorie<100;
})
console.log(data1);