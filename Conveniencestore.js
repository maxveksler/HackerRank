function changeEnough([q, d, n, p], amountDue) {
	return (q * 0.25 + d * 0.1 + n * 0.05 + p * 0.01) >= amountDue
}

const z = changeEnough([0, 0, 0, 5], 0.75)
console.log(z)