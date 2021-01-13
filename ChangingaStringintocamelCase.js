function camelCase(str){
    let s = ''
    let x = replaceAll(str, '_', ' ')
    //console.log(x)
    let a = x.split(' ')
    //console.log(a)
    let first = a[0]
    let low = first.replace(first.charAt(0),first.charAt(0).toLowerCase())
    s = s+low 
    //console.log(s)
    let sliced = a.slice(1)
    //console.log(sliced)
    for(let i = 1 ; i <= sliced.length; i++){
        let current = a[i]
        //console.log('current',current)
        let up = current.replace(current.charAt(0), current.charAt(0).toUpperCase())
        //console.log(up)
        s = s + up
    }
    return s;
}

const z = camelCase('Hello_World_hey tHanks')

console.log(z)

function replaceAll(str, w, to ){
    while(str.indexOf(w)>0){
         str = str.replace(w, to)
    }
    return str;
}