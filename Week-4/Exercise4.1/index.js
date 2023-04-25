function myPromise(execFunc){
    let status = 'PENDING', isCalled = false, value, onResolve, onReject;
     
    function resolve(val){
        status = 'RESOLVED';
        value = val;
        if(typeof onResolve === 'function'){
            onResolve(val);
        }
    }

    this.then = function(cb){
        onResolve = cb;
   
        if(status === 'RESOLVED' && !isCalled){
            isCalled = true;
            onResolve(value);
        }
        return this;
    }

    function reject(val){
        status = 'REJECTED';

        value = val;

        if(typeof onReject === 'function'){
            onReject(value)
        }
    }

    this.catch = function(cb){
        onReject = cb;
        if(status === "REJECTED" && !isCalled){
            isCalled = true;
            onReject(value);
        }
        return this;
    }

    return execFunc(resolve,reject)
}
console.log(new Promise((res,rej)=>console.log(res(1231))))
function getNumber(delay){
    return new myPromise((resolve,reject)=>{
        setTimeout(()=>{
            const randomValue = Math.floor(Math.random() * 10);
            if(randomValue % 5 ===0){
               reject(new Error ("Value divisble by 5"))
            }
            else{
                resolve(randomValue);
            }
        },delay)
    })
}

getNumber(1000).then((res)=>res).then(res => console.log(res)).catch(err => console.log(err))