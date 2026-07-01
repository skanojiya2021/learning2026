const obj = {
    name: 'shilpa',
    age: 21
}

function details(add, add1) {
    console.log(`My slef ${this.name} & I'm ${this.age} from ${add} in ${add1}`);
}

// const data = details.call(obj, 'ghatkopar');


Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this != 'function') {
        throw new Error('this is not a function');
    }
    context.fn = this;
    context.fn(...args);
}
console.log(details.myCall(obj, 'ghatkopar', 'Mumbai'));
