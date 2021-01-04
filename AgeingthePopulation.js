function age(o , n){
    let y = {...o}
    for (const property in y) {
        y[property] =  o[property] + n
      }
      return y; 
}
let people = {
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
  }
const z = age(people, 1)
  console.log(z, people)