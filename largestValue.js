//Find largest number from array;
let arr = [10, 5, 2, 6, 9, 7];
function largetNum(arr) {
    let largest = -1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largetNum(arr))