const Fib = (n) => ({
    [Symbol.iterator]: function(){
        let i=0, old=0, newVal =0;
        return {
            next:() =>{
                if(i++ < n){
                    [old,newVal] = [newVal,(old+newVal) || 1]
                    return {
                        value:old,
                        done:false
                    }
                }else{
                   return { done:true}
                }
            }
        }
    }
})

console.log([...Fib()])