function palindromCheck(num){
if(num<0)
    return false;
let rev = 0; let xCopy = num;
while(num>0){
    let n = num%10;
    rev = (rev*10)+n;
    num = Math.floor(num/10);
}
return rev == xCopy;
}
palindromCheck((121))