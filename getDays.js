function getDays(date1, date2) {
	return new Date(date2 - date1).getDate() - 1
}

const z = getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ) 
console.log(z)