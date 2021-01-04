function convertDate(date) {
	let x =  new Date(date)
	let m = x.getMonth()+1
	let d = x.getDate()
	let y = x.getFullYear()
	return [m,d,y]
}

const z = convertDate("January 9, 2019")
console.log(z)