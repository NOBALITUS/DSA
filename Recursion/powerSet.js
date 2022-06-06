function main(S){
    console.log(powerSet(S,'',0,S.length,[]));

}

function powerSet(S,res,i,l,arr){
    
    if(i===l){
        res!==''?arr.push(res):arr;
        return;
    }

    //choosing the ith index character
    powerSet(S,res+S[i],i+1,l,arr);

    //not choosing the ith index character
    powerSet(S,res,i+1,l,arr);
    return arr;
    
}

main('abcd');