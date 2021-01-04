function space(text){
    let s = ''
    for(let i = 0; i < text.length; i++){
        let current = text.charAt(i)
        if(current == current.toUpperCase() && i > 0){
            s =  s + ' ' + current
        }
        else{
            s = s + current
        }
    }
    return s;
}

const z = space("SheWalksToTheBeach")
console.log(z)