function main(A){
    let A1=[];
    let A2=[];
    let result=[];
    for(let index=0;index<Math.floor(A.length/2);index++){
        A1.push(A[index])

    }

    for(let index=Math.floor(A.length/2);index<A.length;index++){
        A2.push(A[index]);
    }

    let size = A1.length>A2.length?A1.length:A2.length;
    

    for(let index=0;index<size;index++){
        if(index<A1.length)
        result.push(A1[index])

        if(index<A2.length)
        result.push(A2[index])


        
    }

    console.log(result)
}

main([1,2,9,15])


