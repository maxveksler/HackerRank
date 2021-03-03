function takeDownAverage(grades){
    let x = []

    for(let i = 0 ; i < grades.length; i++){
        let current = grades[i]
        let percentage = current.slice(0, -1)
        let num = Number(percentage)
        x.push(num)
    }
    let total = 0
    for(let i = 0 ; i < x.length; i++){
        total += x[i]
    }
    let avg = total/x.length
    let z = (x.length + 1) * (avg-5)
    z = z - total
    return Math.floor(z) + "%"
}

const z = takeDownAverage(["95%", "83%", "90%", "87%", "88%", "93%"])
console.log(z)