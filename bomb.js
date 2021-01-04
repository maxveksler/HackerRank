function bomb(a){
    let x = a.split(' ')
    for(let i = 0 ; i < x.length; i ++){
        let current  = x[i]
        if(current == 'bomb' || current == 'Bomb'){
            return 'Duck!!!'
        } 
    }
    return 'There is no bomb relax'
}

const z = bomb('There is a bomb')
console.log(z)