function karaca(s){
    let str = ''
    for(let i = s.length ; i >= 0; i--){
        let current = s.charAt(i)
        if(current == 'a'){
            current = 0
        } else if(current == 'e'){
            current = 1
        } else if(current == 'i'){
            current = 2
        } else if(current == 'o'){
            current = 2
        } else if(current == 'u'){
            current = 3
        }
        str = str + current
    }
    return str + 'aca';
}

const z = karaca('apple')
console.log(z)