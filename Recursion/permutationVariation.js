let perms = [];

function main(arr){
    permutation(arr,arr.length,0);
    console.log(perms);
}


function permutation(arr,l,index){
    
    
    if(index===l-1){
        perms.push(arr);
        return;
    }


    for(let i=index;i<l;i++){
        let tmpArr  = JSON.parse(JSON.stringify(arr));
        let tmp = tmpArr[index];
        tmpArr[index] = tmpArr[i];
        tmpArr[i] = tmp;

        permutation(tmpArr,l,index+1);

    }
}


main([1,2,3,4])