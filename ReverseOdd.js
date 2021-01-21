function reverse(s){
    let str = []
    let x = s.split(" ")
    for(let word of x) {
       
        if(word.length % 2 != 0){
            let reverse = ''
            for(let j = word.length ; j >= 0; j--){
                let current = word.charAt(j)
                reverse += current
            }
           str.push (reverse)
        } else{
            str.push (word)
        }
    }
    return str.join(' ');
}

const z = reverse('One two three four')
console.log(z)