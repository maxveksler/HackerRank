function mult(s){
    let x = s.split(',')
    let n = 1
    for(let i = 0; i < x.length; i++){
        let current = x[i]
        n = n * Number(current)
    }
    return n;
}

const z = mult("2,3,0")
console.log(z)