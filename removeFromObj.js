function remove(obj, att){
    delete obj[att]
    console.log(obj)
}

const z = remove({a : '1', b : '2'}, 'b')
console.log(z)