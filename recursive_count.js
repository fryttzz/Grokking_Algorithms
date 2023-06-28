function count(list) {
    if (list.length == 0) {
        return 0
    }
    else {
        return 1 + count(list.slice(1))
    }
}

console.log(count([1,2,3,4]));
console.log(count([2,654654]));
console.log(count([]));