function testName(name){
    let result = /^[a-zA-Z ]+$/.test(name);
    return result;
}


function ValidateEmail(inputText)
{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.match(mailformat)){
        return true;
    }
    else{
        return false;
    }
}
const x  = testName('John Doe')
console.log(x)
const z = ValidateEmail('mveksler1006@gmail.com')
console.log(z)

