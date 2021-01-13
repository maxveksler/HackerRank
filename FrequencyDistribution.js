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