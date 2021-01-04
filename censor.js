function uncensor(str, vowels) {
	for (let i=0;i<vowels.length; i++){
		str = str.replace('*', vowels[i])
	}
 return str
}

const z = uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")
console.log(z)