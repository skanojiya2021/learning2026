// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
function palindrome(st){
    s = s.toLowercase();
    let result = 0;
    let rev = 0;
    for(let i = 0; i< s.length; i++){
        if(s[i].match(/^[a-z0-9]/i)){
            result = result + s[i];
            rev = s[i]+ rev;
        }
    }
    return result === rev;
}

//optimized solution
function palindrome(st){
    s = s.toLowercase();
    let l = 0;
    let r = s.length - 1;
    while(l < r){
        if(s[l] !== s[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
}