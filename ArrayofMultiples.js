function arrayOfMultiples (num, length) {
    let mult = [];
    
        for(i = 1;i <= length; i++){
          mult.push(num*i);
        }
        
    return mult;
    }

const z = arrayOfMultiples(7,5)
console.log(z)