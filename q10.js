const data = require("./food.json");
function compare(a,b){
    return b.protiens - a.protiens;
}
data.sort(compare)
console.log(data);
