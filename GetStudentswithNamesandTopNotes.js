

function topNote(obj){
    let a = obj.notes
   
    let largest = Number.MIN_VALUE
    //console.log('largest', largest)
    for(let i = 0 ; i < a.length; i++){
        //console.log('obj', obj)
        let current = obj.notes[i]
        //console.log('current',current)
        if(current > largest){
            largest = current
        }
    }
    let object = {
        name : obj.name,
        topnote : largest,
    }
    return object;
}

const z = topNote({ "name": "John", "notes": [3, 5, 4] })
console.log(z)