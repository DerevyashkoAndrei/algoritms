const array = [141,1,17,-7,-17,-27,18,541,8,7,7]

class Largest {
    constructor(size) {
        this.size = size
        this.list = []
    }

    hasSmaller(value) {
        if (this.list.length < this.size) return true;
        return this.list.some(e => e < value)
    }

    add(value) {
        this.list.push(value);
        this.list = this.list.sort((a,b) => a > b ? 1 : -1).slice(-this.size)
    }

}

console.log(findThreeLargestNumbers(array),'expect [18,141,541]')

// time O(n) | space O(1)
function findThreeLargestNumbers(array, size = 3) {
    const largest = new Largest(size);

    for (let index = 0; index < array.length; index ++ ) {
        if (largest.hasSmaller(array[index])) largest.add(array[index])
    }
    return largest.list
   }
