function dash(s){
    for(let i = 0 ;i < s.length; i++){
        let current = s.charAt(i)
        if(current == 'a' || current == 'e' || current == 'i' || current == 'o' || current == 'u'){
            current = `-${current}-`
        }
    }

}

const z = dash('Edabit')
console.log(z)