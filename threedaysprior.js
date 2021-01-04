let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
function threeDays(date){
    let d = date.getDate()
    let m = date.getMonth()
    let y = date.getFullYear()
    if(d <= 3){
        if(m == 0){
            y -= 1
            m = 11
        }else{
            m-=1
        }
        let diff = d-3
        if(m == 2 && y%4 == 0){
            d = (daysInMonth[m] + 1) + diff
        }
        d = daysInMonth[m] + diff

    } else{
        d -= 3
    }
    return y + "-" + m + "-" + d
}
  
const z = threeDays (new Date(2018, 0, 1))
console.log(z)