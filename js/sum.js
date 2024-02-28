function sum(lista) {
    var total = 0
    lista.forEach(x => {
        total += x
    });
    return total
}

console.log(sum([1, 2, 3]));

function sumRecursiva(lista) {
    if (lista.length < 2) return lista[0] || 0
    else {
        return lista[0] + sumRecursiva(lista.slice(1))
    }
}

console.log(sumRecursiva([1,2,4,6,8]));