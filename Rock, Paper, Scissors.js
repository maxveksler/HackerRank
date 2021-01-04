function rps(p1,p2){
    if(p1 == p2){
        return "It's a draw"
    }
    if(p1 == 'Rock' && p2 == 'Paper'){
        return 'The winner is p2'
    }
    else if(p1 == 'Rock' && p2 == 'Scissors'){
        return 'The winner is p1'   
    }
    else if(p1 == 'Paper' && p2 == 'Rock'){
        return 'The winner is p1'
    }
    else if(p1 == 'Paper' && p2 == 'Scissors'){
        return 'The winner is p2'
    }
    else if(p1 == 'Scissors' && p2 == 'Rock'){
        return 'The winner is p2'
    }
    else if(p1 == 'Scissors' && p2 == 'Paper'){
        return 'The winner is p1'
    }
}

const z = rps('Rock', 'Paper')
console.log(z)