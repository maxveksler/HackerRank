function swap(n){
    let num = n + ''
    let x = num.split('')
    let n1 = x[0]
    let n2 = x[1]
    let final = n2+n1
    if(n < final){
        return false;
    }
    else{
        return true;
    }
}

const z = swap(72)
console.log(z)