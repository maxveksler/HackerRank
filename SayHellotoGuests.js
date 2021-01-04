function hello(a){
    let h = 'Hello '
    let result = ''
    for(let i = 0 ; i < a.length; i++){
        let current = a[i]
        console.log(current, 'current')
        //console.log(a.indexOf(current))
        if(i != a.length-1){
            result =result + h + current + ', '
        }
        else{
            result =result + h + current
        }
    }
    return result;
}

const z = hello(["Angela", "Joe"])
console.log(z)