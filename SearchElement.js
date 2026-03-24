//Find element from array and return index if not present retrun -1.

function checkElement(arr, x){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == x){
            return i
        }
    }
    return '-1';
}
console.log(checkElement(arr, 8));