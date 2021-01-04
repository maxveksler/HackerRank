function hello(a){
   return a.map((item)=>(`Hello ${item}`)).join(', ')
   
}

const z = hello(["Angela", "Joe"])
console.log(z)