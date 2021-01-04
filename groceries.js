const { get } = require("http");

function getPrice(g){
    let total = 0;
    for(let i = 0 ; i < g.length; i++){
        let current = g[i]
        total = total + current.quantity*current.price
    }
    return total;
}

groceries = [
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ]

console.log(getPrice(groceries))