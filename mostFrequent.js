function frequency(a){
    let mcn = null;
    let ctr = 0;
    let currentCtr = 0;
    let prevCtr = 0;
    while(ctr < a.length){
        let num = a[ctr]
        for(let i = 0 ; i < a.length;i++){
            if(a[i] == num){
                currentCtr++
                if(i == a.length - 1){
                    a.pop()
                } else {
                    a.splice(i, i+1)
                }  
            }
        }
        //console.log(currentCtr)
        if(currentCtr > prevCtr){
            prevCtr = currentCtr
            currentCtr = 0
            mcn = num
        }
        ctr++
    }
    return mcn;
}

console.log(frequency([1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4]))