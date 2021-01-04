function commonElements(a1,a2){
    let x = []
    for(let i = 0; i < a1.length; i++){
        let current1 = a1[i]
        if(a2.indexOf(current1) >= 0){
            x.push(current1)
        }
        
    }
    return x;
}

let z = commonElements([1, 3],[-1, 3, 4, 6, 7, 9] )
console.log(z)