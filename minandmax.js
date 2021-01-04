function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }

  const z = minMax([1,2,3,4,5])
  console.log(z)