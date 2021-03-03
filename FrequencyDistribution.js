function getFrequencies(arr) {
	let obj = {};
	arr.map((item, x) => {	
		if (arr.indexOf(item) != x) {
			obj[x]++
		} else {
			obj[x] = 1;
		}
	})
	return obj;
}

const z = getFrequencies([1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,6,6])
console.log(z)