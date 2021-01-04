function getDays(d1 ,d2){
    return (d2.getTime() - d1.getTime())/(1000 * 3600 * 24);
}

const z = getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ) 

console.log(z)