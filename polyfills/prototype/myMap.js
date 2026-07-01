Array.prototype.myMap = function (cb) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(cb(this[i], i, this));
    }
    return newArray;
};

const arr = [1, 5, 6, 3];
const value = arr.myMap((e) => e * 2);
console.log(value);