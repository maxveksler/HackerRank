function reverse(num){
    let s = num + ""
    let m = ""
    for(let i = s.length ; i > -1; i--){
        let current = s.charAt(i)
        m = m + current
    }
    let result = m+s
    return result;
}

const z = reverse(789)
console.log(z)