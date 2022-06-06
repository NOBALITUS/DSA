function main(arr){
    console.log(reverseArr(arr,0,arr.length-1));
}


function reverseArr(arr,i,j){
    
    if(i>j)
    return arr;

    let tmp=arr[i];
    arr[i]=arr[j];
    arr[j]=tmp;

    
    return reverseArr(arr,i+1,j-1);
}


main([1,2,3,4,5]);