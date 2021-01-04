function removeDups(a){
    let y = []
    for(let i = 0; i < a.length; i++){
        let current = a[i]
        if(y.indexOf(current) == -1){
            y.push(current)
        }
    }
    return y
}   
const z = removeDups([1,0,1,0])
console.log(z)