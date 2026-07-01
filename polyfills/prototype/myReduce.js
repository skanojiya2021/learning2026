Array.prototype.myReduce = function (cb, initialValue) {
    var acc = initialValue;
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
};

const arr = [1, 5, 6, 3];
const value = arr.myReduce((acc, curr, i, arr) => {
    return acc + curr;
});
console.log(value);


