function replaceAll(text, target, r){
    while(text.indexOf(target) != -1){
      text = text.replace(target, r)
    }
    return text;
}


function format(text,data){
    for(const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
        text = replaceAll(text,`{${key}}`, value)
      }
      return text;
}

const z = format('Hello {name} from {city} {name}', {name : "Max", city : "Brooklyn"})
console.log(z)

