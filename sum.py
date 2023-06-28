def soma(lista):
    total = 0
    for x in lista:
        total += x
    return total

print(soma([1,2,3]))

def somaRecursiva(lista):
    if len(lista) < 2:
        return lista[0] | 0
    else:
        return lista[0] + somaRecursiva(lista[1:])

print(somaRecursiva([1,2,4,6,8]))