function filter(a, n){
    let x = []
    for(let i = 0 ; i < a.length;i++){
        let current = a[i]
        current = current + ''
        if(current.length == n){
            x.push(Number(current))
        }
    }
    return x;
}

const z = filter([88, 232, 4, 9721, 555], 3)
console.log(z)