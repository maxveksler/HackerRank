function commonEle(a1,a2){
    let x = []
    
    for(let i = 0; i < a1.length; i++) { 
        let current = a1[1]               
        for(let j = 0; j < a2.length; j++) {                       
            if(current == a2[j]) { 
                x.push(current); 
             } 
        } 
       
    }    
    return x;
}
const z = commonEle([-1, 3, 4, 6, 7, 9], [1, 3])
console.log(z)