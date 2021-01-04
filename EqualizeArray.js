function equalize(a){
    let obj = {}
    let largest = 0; 
    for(let i = 0 ; i < a.length;i++ ){
        let current = a[i]
        //console.log(current)
        if(obj[current] == undefined){
            obj[current] = 1
        } else{
            obj[current]++
        }
        //console.log(obj)
    }
    for (const [key, value] of Object.entries(obj)) {
        //console.log(`${key}: ${value}`);
        if(value > largest){
            largest = value
        }
      }
      return a.length - largest;
}

const z = equalize([3, 3, 2, 1, 3])
console.log(z)