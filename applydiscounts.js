function discount(a, p){
    let x = []
    let d = p.substring(0 , p.length-1)
    for(let i = 0 ; i < a.length; i++){
        let current = a[i]
        let result = (current/100)*d
        x.push(result)
    }
    return x;
}

const z = discount([2, 4, 6, 11], "50%")
console.log(z)