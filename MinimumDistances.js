function min(arr){
    let positions = {}
    let distances = {}
    let smallest = Number.MAX_VALUE;
    for(let i = 0; i < arr.length; i++){
        let current = arr[i]
        if(positions[current] != undefined){
            distances[current] = i - positions[current] 
        }

        positions[current] = i
    }
    //console.log(distances)
    for (const [key, value] of Object.entries(distances)) {
        //console.log(`${key}: ${value}`);
        if(value < smallest){
            smallest = value
        }
      }

      if(smallest == Number.MAX_VALUE){
          return -1;
      } else {
        return smallest;

      }
}

const z = min([3,2,1,2,3])
console.log(z)