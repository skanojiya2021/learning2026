var str = 'shilpa';

//1. Using methods
str.split('').reverse().join('');

//2 using for-loop
function reverseStr(str){
let newStr = '';
let len = str.length;
for(let i=len-1; i>=0; i--){
newStr = str[i]; 
return newStr;
}
}
reverseStr(str);

//3. Using recurrsive fuction
function recurrsiveStr(str){
if(str === '') return '';
else
    return recurrsiveStr(str.substr(1))+ str.charAt(0);
}
recurrsiveStr(str);

//4. Ternary operator
function recurrsiveStr(str){
return (str === '')? '': recurrsiveStr(str.substr(1))+ str.charAt(0);
}
recurrsiveStr(str);