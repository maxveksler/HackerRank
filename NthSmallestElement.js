function nthSmallest(a , x){
    a.sort(function(a,b) {
        if(a > b){
            return 1;
        }
        else{
            return -1
        }
     })
    return a[x-1]
}

const z = nthSmallest([1, 3, 5, 7], 2)
console.log(z)