function file(a){
    let x = []
    for(let i = 0; i < a.length; i++){
        let current = a[i]
        let y = current.substring(current.indexOf('.') , current.length)
        x.push(y)
    }
    return x
}

const z = file(["code.html", "code.css"])
console.log(z)