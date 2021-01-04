function sortD(num){
    let y = ''
    let x = num + ""
    let v = x.split('')
     v.sort(function(a,b) {
        if(a > b){
            return -1;
        }
        else{
            return 1
        }
     })
    for(let i = 0; i < v.length; i++){ 
        y += v[i]
    }
    return Number(y);
    
}
    
const z = sortD(4537)
console.log(z)

function sortA(num){
    let x = num + ""
    let y = ''
    let v = x.split('')
     v.sort(function(a,b) {
        if(a > b){
            return 1;
        }
        else{
            return -1
        }
     })
     for(let i = 0; i < v.length; i++){ 
        y += v[i]
    }
    return Number(y);
    
    
}
const l = sortA(4321)
console.log(l)
