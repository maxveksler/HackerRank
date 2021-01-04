function drink(array){
    let sorted = array.sort(function(a, b){
        return a.price - b.price;
        });
    return sorted;
}

const z = drink([
    {name: "lemonade", price: 50},
    {name: "lime", price: 10},
    {name: "pink", price: 20}
  ])
  console.log(z)