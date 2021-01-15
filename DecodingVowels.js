function encrypt(text) {
        let str = "";
        for(i = text.length-1 ; i >= 0 ; i--){
            let current = text[i]
            if(current == "a")
                str += "0";
            else if(current == "e")
                str += "1";
            else if(current == "o")
                str += "2";
            else if(current == "u")
                str += "3";
            else
                str += current;
        }
        
        str += "aca";
        return str;
        
    }

    const z = encrypt('banana')
    console.log(z)