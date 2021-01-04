function degrees(d){
    let p = d.split('°')
    let x = p[0]
    let i = p[1].toUpperCase()
    console.log(x)
    let num = Number(x)
    if(i == 'C'){
        let f = Math.round((num * 9/5) + 32) 
        return f + '°F';
    }
    else if(i == 'F'){
        let c = Math.round((num - 32) * 5/9)
        return c + '°C';
    }
}

const z = degrees("19°F")
console.log(z)