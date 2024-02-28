function buscaMenor(arr) {
    var menor = arr[0]
    var menor_indice = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor_indice = i
            menor = arr[i]
        }
        return menor_indice
    }
}

function ordernacaoPorSelecao(arr) {
    var novoArr = []
    arr.forEach(element => {
        var menor = buscaMenor(arr)
        novoArr.push(arr.pop(menor))
    });
    return novoArr
}

console.log(ordernacaoPorSelecao([5,3,6,2,10]));