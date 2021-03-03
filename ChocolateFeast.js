function chocolateFeast(n, c, m) {
    let x = Math.floor(n/c);
    let total = x;
    while(x>=m){
        console.log('X',x,'Total',total)

        total += Math.floor(x/m);

        x = Math.floor(x/m) + x%m
    }
    return total;
}

console.log(chocolateFeast(7 ,3 ,2))