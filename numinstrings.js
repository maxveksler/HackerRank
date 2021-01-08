function num(a){
    let n = []
    for(let i = 0 ; i < a.length; i++){
        let current = a[i]
        let x = current.split('')
        console.log(x)
        for(let j = 0; j < x.length; j++){
            let c = x[i]
            if(Number(c) != NaN){
                n.push(c)
            }
        }
    }
    return n;
}
const z = num(["1a", "a", "2b", "b"])
console.log(z)