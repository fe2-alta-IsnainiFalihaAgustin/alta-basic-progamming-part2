function palindrome(katak){

    var len = katak.length;
    var mid = Math.floor(len/2);
    
    for (var i = 0; i < mid; i++) {
        if (katak[i] !== katak[len - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("katak"))
console.log(palindrome("kupu-kupu"))