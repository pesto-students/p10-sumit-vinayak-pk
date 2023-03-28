function createIncrement(){
    let count= 0;
    
    function increment(){ count++;}
    let message=`Count is ${count}`;

    function log(){
    
    console.log(message);
    }
    return[increment,log];}
    const[increment,log] = createIncrement();
    increment();
    increment();
    increment();
    log(); // it will print Count is 0, as message is defined in createIncrement fns scope and hence it won't get updated even when increment function is called