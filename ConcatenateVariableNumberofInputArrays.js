function concat(...args) {
	let arr1=[...args]
	let arr=[]
	for (let i=0;i<arr1.length;i++){
		arr.push(...arr1[i])
	}
	return  arr
}

const z = concat([1, 2, 3], [4, 5], [6, 7])
console.log(z)