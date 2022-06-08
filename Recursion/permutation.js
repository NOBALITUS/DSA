let perm=[];

function main(arr){
    permutation(arr,[],arr.length)
    console.log(perm);
}


function permutation(arr,temp,l){
    if(temp.length===l){
        perm.push(temp);
        return ;
    }

    for(const item of arr){
        if(!temp.includes(item)){
            permutation(arr,[...temp,item],l);
        }
    }
}


main([1,2,3,4])