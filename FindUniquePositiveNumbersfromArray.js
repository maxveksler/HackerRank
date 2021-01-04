function uniqueArr(a){
    let x =[]
    for(let i = 0; i < a.length; i++){
        let current = a[i]
        if(current >= 0 && x.indexOf(current) == -1){
            x.push(current)
        }
    }
    return x;
}

const z = uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3])
console.log(z)