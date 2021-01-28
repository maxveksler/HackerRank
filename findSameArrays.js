function sameArr(a1,a2){
    if(a1.length != a2.length){
        return false
    }
    for(let i = 0 ; i < a1.length; i++){
        if(a1[i] != a2[i]){
            return false;
        }
    }
    return true;
}

const z = sameArr([1,2,3], [1,3,4])
console.log(z)