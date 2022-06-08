let arr=[];

function main(S){
    powerSet(S,[],0,S.length,[])
    console.log(arr);

}

function powerSet(S,res,i,l){
    
    if(i===l){
        //console.log(S,res,i,l,arr)
        res.length>0?arr.push(res):null;
        
        return ;
    }

    //choosing the ith index character
    powerSet(S,[...res,S[i]],i+1,l);

    //not choosing the ith index character
    powerSet(S,[...res],i+1,l);
    return ;
    
}

main([1,2,3,4]);