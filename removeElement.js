// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

function removeElement(arr, val){
let len = arr.length;
let x = 0; 
for(let i =0; i<len; i++){
    if(arr[i] != val){
        //2 != 3.  3 2
        arr[x] = arr[i];
        x = x+1;
    }
}
return x
}
let arr = [3,2,2,3], val = 3
removeElement(arr, val);

