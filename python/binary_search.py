def binary_search(list, item):
    low = 0 #1
    high = len(list) - 1 #1
    while low <= high : #2
        mid = int((low + high) / 2) #3
        guess = list[mid] 
        if guess == item: #4
            return mid
        if guess > item: #5
            high = mid - 1
        else: #6
            low = mid + 1
    return None #7
    
print(binary_search([1,3,5,7,9], 3))
print(binary_search([1,3,5,7,9], 1))

"""
1 - baixo e alto acompanham a parte da lista que você está procurando.
2 - Enquanto ainda não conseguiu chegar a um único elemento...
3 - ... verifica o elemento central.
4 - Acha o item.
5 - O chute foi muito alto.
6 - O chute foi muito baixo.
7 - O item não existe.
"""