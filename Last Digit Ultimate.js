function lastDig(a,b,c){
    let x = (a*b) + ''
    let q = c + ''
    if(x.charAt(x.length-1) == (q.charAt(q.length-1))){
        return true;
    }
    else{
        return false;
    }
}

const z = lastDig(25,21,125)
console.log(z)