function reverse(a){
    let temp;
    for(let i = 0; i < a.length/2; i++){
        console.log('swapping', i, 'with', a.length-1-i)
        temp = a[i]
        a[i] = a[a.length-1-i]
        a[a.length-1-i] = temp
    }
    return a;
}

const z = reverse([1,2,3,4,5,6])
console.log(z)