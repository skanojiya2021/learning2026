Array.prototype.myFilter = function (cb) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            newArray.push((this[i]));
        }
    }
    return newArray;
};

const arr = [1, 5, 6, 3];
const value = arr.myFilter((e) => e > 2);
console.log(value);

