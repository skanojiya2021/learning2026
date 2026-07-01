const obj = {
    name: 'shilpa',
    age: 21
}

function details(add, add1) {
    console.log(`My slef ${this.name} & I'm ${this.age} from ${add} in ${add1}`);
}

// const data = details.call(obj, 'ghatkopar');


Function.prototype.myApply = function (context = {}, args = []) {
    if (typeof this != 'function') {
        throw new Error('this is not a function');
    }
    if (!Array.isArray(args)) {
        throw new Error('not an array');
    }
    context.fn = this;
    context.fn(...args);
}
console.log(details.myApply(obj, ['ghatkopar', 'Mumbai']));
