function dice(a){
    let tops = []
    for(let i = 0 ; i < a.length;i++){
        let c = a[i]
        if(tops.indexOf(c) == -1){
            tops.push(c)
        }
        
 }
 
    console.log(tops)
    let smallest = -1;

    for(let i = 0 ; i < tops.length; i++){
        let top = tops[i]
        let total = 0
        
        for(let j = 0 ; j < a.length; j++){
            let current = a[j]
            if(current == top){
            } else if((current + top) == 7){
                total+=2
            } else{
                total++
            }
        }
        console.log(top, total)
        if(smallest == -1 || total < smallest){
            smallest = total
        }
        //console.log(smallest)
    }
    return smallest;
}

const z = dice([3,2,2,2,2,2,2,2,2,2,4])
console.log(z)