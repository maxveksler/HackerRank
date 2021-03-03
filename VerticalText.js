function vertical(text){
    arr = []
    let longest = 0;
    let x = text.split(" ")
    if(x[0] > x[1]){
        longest = x[0].length
    } else{
        longest = x[1].length
    }
    for(let i = 0 ; i < longest; i++){
        arr.push([" ", " "])
    }
    for(let i = 0 ; i < x[0].length; i++){
        arr[i][0] = x[0][i]
    }
    for(let i = 0;i < x[1].length; i++){
        arr[i][1] = x[1][i]
    }
    return arr;
}

const z = vertical('Holy bananas')
console.log(z)