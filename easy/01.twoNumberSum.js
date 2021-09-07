const values = [
    {arr: [3,5,-4,8,11,1,-1,6], target: 10},
    {arr: [3,5,-4,8,11,1,-1,6], target: 14}
] 

values.forEach(e => console.log(twoNumberSum(e.arr, e.target)))

// function twoNumberSum(arr, target) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length - 1; j++) {
//             if (arr[i] + arr[j] === target ) {
//                 return[arr[i], arr[j]]}
//             }
//         }
        
//     return [null, null]
// }

function twoNumberSum(arr, target) {
    let hashMap = {};
    for (let el of arr) {
        if (hashMap.hasOwnProperty(target - el)) return [el, target - el];
        hashMap[el] = target - el;
    }
}


// ONLY FOR SORTED ARRAY
// function twoNumberSum(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while(right !== left) {
//         const sum = arr[left] + arr[right];
//         if (sum ===  target) return [arr[left], arr[right]]
//         if (sum >  target) {
//             right--;
//             continue;
//         }
//         left++

//     }
    

//     return [null, null]
// }