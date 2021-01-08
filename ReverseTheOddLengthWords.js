function reverse(s){
    let str = ""
    for(let i = 0 ; i < s.length; i++){
        let current = s.charAt(i)
        if((current.length)%2 == 0){
            str = str + current
        } else{
            for(let j = s.length; j>0; j--){
                let c = s.charAt(j)
                str = str + c
            }
        }
    }
    return str;
}

const z = reverse('Bananas')