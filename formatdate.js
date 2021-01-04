function formatDate(date) {
    let year = date.getFullYear()
    let month = date.getMonth()+1
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
     
    return [year, month, day, hours, minutes, seconds]
    }
    const z = formatDate(new Date(2020, 6, 4, 8, 0, 0))
    console.log(z)