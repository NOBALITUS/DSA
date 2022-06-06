function nthStair(n){
    if(n<=2){
        return n;
    }

    return nthStair(n-1)+nthStair(n-2);
}

console.log(nthStair(5));