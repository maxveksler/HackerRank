function isIdentical(a1,a2){
    if(a1.length != a2.length){
        return false
    }
    for(let i = 0 ; i < a1.length; i++){
        if(a1[i] != a2[i]){   
            return false;
        }
    }
    return true;
}

const z = isIdentical([1,2,3], [1,3,4])
console.log(z)
function haveSameElements(a1,a2){
    a1.sort(function(a,b){
        if(a > b){
            return 1
        } else if(a<b){
            return -1
        }
    })
    a2.sort(function(a,b){
        if(a > b){
            return 1
        } else if(a<b){
            return -1
        }
    })
}

const y = haveSameElements([3,1,2,2], [2,1,2,3])
console.log(y)