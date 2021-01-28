function matching(a1,a2){
    let x = [];
    for(let i = 0 ; i < a1.length; i++){
        let current = a1[i]
        for(let j = 0; j < a2.length; j++){
            let curr = a2[j]
            if(current == curr){
                if(x.indexOf(curr) <0){
                    x.push(curr)
                }
            }
        }
    }
}

const z = matching([1,2,3], [2,7])
console.log(z)