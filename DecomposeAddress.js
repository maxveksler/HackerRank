function address(address){
    let x = address.split(' ')
    let y = []
    for(let i = 0; i < x.length; i++){
        y.push(x[i]+ '')
    }
    return y;

}

console.log(address("557 Farmer Rd Corner, MT 59105"))