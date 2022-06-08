let count=0;

function main(S,K){
    powerSet(S,[],0,S.length,K)
    console.log(count);

}

function powerSet(S,res,i,l,K){
    
    if(i===l){
        
        if(res.reduce(function (x,y){
            return x+y;
        },0)===K){
            count+=1;
            console.log(res);
        }
        
        return ;
    }

    if([...res,S[i]].reduce(function (x, y) {
        return x + y;
    }, 0)<=K){
    //choosing the ith index character
    powerSet(S,[...res,S[i]],i+1,l,K);
    }
    
    //not choosing the ith index character
    powerSet(S,[...res],i+1,l,K);
    return ;
    
}

main([1,2,3,4,5,6,7],6);