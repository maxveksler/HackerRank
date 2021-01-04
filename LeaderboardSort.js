function leadSort(a){
    return a.sort(function(a,b){
        if(((a.reputation*2)+ a.score) > ((b.reputation*2)+ b.score)){
            return -1;
        }
        else if (((b.reputation*2)+ b.score) > ((a.reputation*2)+ a.score)){
            return 1;
        }
    })
    
}

const z = leadSort([
    { name: "a", score: 100, reputation: 20 },
    { name: "b", score: 90, reputation: 40 },
    { name: "c", score: 115, reputation: 30 },
  ])
console.log(z)