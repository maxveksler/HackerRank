function matching(a1,a2){
    let x = [];
    for(let i = 0 ; i < a1.length; i++){
        let current = a1[i]
        if(a2.indexOf(current)>=0){
            x.push(current)
        }
    }
    return x;
}

const z = matching([1,2,3], [2,7])
console.log(z)