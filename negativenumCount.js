//Count the - num from the array
function negativeNum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
             count++;
        }
    }
    return count;
}
let arr1 = [2,3,-4,8,-5,-2]
console.log(negativeNum(arr1))