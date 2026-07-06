function throttledFn(fn, intervals){
let shouldWait = false;
return function(...args){
    if(!shouldWait){
        fn.apply(this, args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
        }, intervals)
    }
}
}
function getvalue(){
    console.log('this is throttling');
}
const getData = throttledFn(getvalue, 1000);
getData();