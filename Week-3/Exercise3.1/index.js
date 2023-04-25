function Add(...args){
    return args.reduce((a,b) => a+b, 0);
}

const cacheObj = {};

function memoize(targetFn){
   return (...args) => {
        const stringifiedArgs = args.join(',');
        if(!cacheObj[stringifiedArgs]){
           cacheObj[stringifiedArgs] = targetFn(...args);
           return cacheObj[stringifiedArgs]
        }
        console.log('caches')
        return  cacheObj[stringifiedArgs]
   }
}

let memoizeFn = memoize(Add);

console.log(memoizeFn(2,3,4,5,6));
console.log(memoizeFn(6,5,8,4));
console.log(memoizeFn(6,5,8,4));

console.log(memoizeFn(4,6,8,3,2));
console.log(memoizeFn(2,3,4));
console.log(memoizeFn(6,5,8,4));


