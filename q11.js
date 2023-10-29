const data= require("./food.json");
data.sort((a,b)=> a.cab - b.cab);
console.log(data);