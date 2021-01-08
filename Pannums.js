function pandigital(pan){
    let x = pan + ''
    for(let i = 0; i <= 9; i++){
        console.log(x)
        if(x.indexOf(i) < 0){
            console.log(i, 'not there')
           return false;
        } 
    }
    return true;
 }
 
 let z = pandigital(123406789)
 console.log(z)