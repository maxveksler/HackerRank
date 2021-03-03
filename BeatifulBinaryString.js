function beautifulBinaryString(b) {
    let c = 0;
    let x = '';
    for(let i = 0; i < b.length; i++){
        let current  = b.charAt(i)
        console.log('current',current,"x",x,"C",c)
        if(current == '0' && (x.length == 0 || x.endsWith('1'))){
            x += current;
        } else if(current == '1' && x.length != 0 && x.endsWith('0')){
            x += current;
        } else if(current == '1' && x.endsWith('1')){
            x =''
        }
        if(x == '010'){
            c++
            x = '';
        }
    }
    return c;
}

console.log(beautifulBinaryString('0100101010'))