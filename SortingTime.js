function smallest(a){
    let small = Number.MAX_VALUE
    for(let i = 0 ; i < a.length; i++){
        let current = a[i]
        if(current < small){
            
            small = current 
        }
    }
    return small;

}
function sort(a){
    let x = []
    let small = smallest(a)
    //console.log('SMALLET NUM',smallest)
   // x.push(small)
    for(let i = 0 ; i < a.length*Number.MAX_VALUE; i++){
        x.push(small)
        //console.log('small',small)
        let current = a[i]
        let index = a.indexOf(small)
        a.splice(index, 1)
        small = smallest(a)
    }
   return x;
}



const z = sort([2, -5, 1, 4, 7, 8,9,10,15])
console.log(z)



    