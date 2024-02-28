function maxValue(array) {
    if (array.length == 0) {
        return null
    }
    if (array.length == 1) {
        return array[0]
    }
    else {
        var sub_max = maxValue(array.slice(1))
        console.log(sub_max);
        return array[0] > sub_max ? array[0] : sub_max
    }
}

console.log(maxValue([2,1,5,3,9,6]));