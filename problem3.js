function primeNumber (number) {
    var flag = "Bilangan Prima"
    for(var i = number-1; i>1; i--){
        if (number%i === 0) {
            flag = "Bukan Bilangan Prima"
        }
    }
    return flag
}

console.log(primeNumber(7));
console.log(primeNumber(10));