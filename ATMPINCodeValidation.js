function pin(s){
    if(s == '' || isNaN(s)){
        return false;
    }
    else if(s.length == 4 || s.length == 6){
        return true;
    }
}

const z = pin('12a4')
console.log(z)