// Given an integer array nums sorted in non-decreasing order,
//  remove the duplicates in-place such that each unique element appears only once.
//   The relative order of the elements should be kept the same.

function removeDuplicates(arr){
let len = arr.length;
let x= 0;
for(let i =0; i<len; i++){
    if(arr[i] > arr[x]){
        x = x+1;
        arr[x] = arr[i]
    }
}
return x+1;
}
let arr = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(arr);