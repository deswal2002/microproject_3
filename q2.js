
const data = require("./food.json");

let data1=data.filter(e => {
    return e.category="Vegetable";
    
});
console.log(data1);
