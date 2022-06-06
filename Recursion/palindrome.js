function palindrome(s){

    return(palindromeUtil(s,0,s.length-1));

}


function palindromeUtil(s,i,j){
    
    if(j<i)
    return true;

    return s[i]===s[j] && palindromeUtil(s,i+1,j-1);
}

console.log(palindrome('aba'));