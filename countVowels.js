function countVowels(str) {
    str = str.toLowerCase();
    let volwels = 'a,i,o,u,e';
    let count = 0;
    for (let i in str) {
        if (volwels.includes(str[i])) {
            count++
        }
    }
    return count;
}
let str = 'javascriptu';
console.log(countVowels(str));