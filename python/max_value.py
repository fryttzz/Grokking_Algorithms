def maxValue(array):
    if len(array) == 0:
        return None
    if len(array) == 1:
        return array[0]
    else:
        sub_max = maxValue(array[1:])
        return array[0] if array[0] > sub_max else sub_max
print(maxValue([2,1,5,3,9,6]))