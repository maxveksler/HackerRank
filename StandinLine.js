function line(a , n){
    let firstElement = a.shift();
    a.push(n)
    return a;
}

const z = line([5, 6, 7, 8, 9], 1)
console.log(z)