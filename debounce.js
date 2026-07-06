function debounceFn(fn, delay) {
    return function (...args) {
        let timer;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}
function valueData(delay) {
    setTimeout(() => {
        console.log('this is debounce');
    }, delay)
}
const getData = debounceFn(valueData, 1000)
getData();
getData('1');
getData('2');
getData('3');