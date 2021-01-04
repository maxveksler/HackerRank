function count(a){
    let pos = []
    let neg = 0
    let result = []
    for(let i = 0 ; i < a.length; i++){
        let current = a[i]
        if(current > 0){
            pos.push(current)
        }
        else if(current < 0){
            neg = neg + current
        }
    }
    result.push(pos.length)
    result.push(neg)
    return result;
}

const z = count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
console.log(z)