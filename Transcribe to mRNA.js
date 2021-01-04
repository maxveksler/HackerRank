function mRna(s){
    let str =''
    for(let i = 0; i < s.length; i++){
        let current = s.charAt(i)
        if(current == 'A'){
            current = 'U'
            str = str + current
        }
        else if(current == 'T'){
            current = 'A'
            str = str + current
        }
        else if(current == 'G'){
            current = 'C'
            str = str + current
        }
        else if(current == 'C'){
            current = 'G'
            str = str + current
        }
    }
    return str;
}

const z = mRna("ATTAGCGCGATATACGCGTAC")
console.log(z)
