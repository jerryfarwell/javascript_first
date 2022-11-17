
function factorial(n){
if (n == 0){
    return 1
}
else {
    return factorial(n-1)* n
}
}

n = prompt("choissez un nombre afin d'afficher le résultat en factoriel")
console.log(factorial(n))




