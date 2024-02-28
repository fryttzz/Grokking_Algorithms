function binarySearch(list, item) {
    low = 0
    high = list.length - 1

    while (low <= high) {
        mid = parseInt((low + high) / 2)
        guess = list[mid]

        if (guess === item) {
            return mid
        }
        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return null
}

myList = [1, 3, 5, 7, 9]
binarySearch(myList, 1)
binary_search(my_list, 7)
binary_search(my_list, 3)
binary_search(my_list, 4)