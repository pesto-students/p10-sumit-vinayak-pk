const doTaskWithAyncAwait = async () => {
   try{
       const randNumber = await getRandomNumber();
       const checkedNumber = await checkNumberWithPromise(randNumber);
       const color = await getColor(checkedNumber)
       console.log(color)

   }catch(err){
      console.log(err);
   }
}


function* doTaskWithGenerator(){
    try{
        let randNumber,checkedNumber,color;
        //   yield getRandomNumber().then(res => {console.log(res);randNumber = res});
        //   console.log(randNumber,'randNumber')
        //   yield checkNumberWithPromise(randNumber).then(res =>{console.log(res); checkedNumber = res}).catch(e => e);
        //   console.log(checkedNumber,'checkedNumber')
        //   yield getColor(checkedNumber).then(res => { color = res})
        randNumber = yield 1;
        console.log(randNumber);
        checkedNumber = yield 2;
        console.log(checkedNumber)
        return color;
       

 
    }catch(err){
       console.log(err);
    }
}

const getRandomNumber = () =>{
    return Promise.resolve(
      Math.ceil(Math.random()*8))
}

const checkNumberWithPromise =  (val) => {
    return new Promise((res, rej)=>{
        if(val<=5){
            res(val)
        }else{
            rej('Number is bigger than 5')
        }

    })
}

const getColor = (i) => {
    const colors = ['red','blue','black','yellow','green','purple']
    return Promise.resolve(colors[i])
}

const handleGeneratorFunc = async () =>{
    const genFn = doTaskWithGenerator();
    try{
     genFn.next();
     genFn.next();
     genFn.next();
     genFn.next();

    }
    catch(err){
        console.log(err)
    }
}

function* myGenerator() {
    const a = yield 1;
    const b = yield 2;
    const c = yield 3;
    return [a, b, c];
  }
  
  const gen = myGenerator();
  
//   console.log(gen.next('a')); // { value: 1, done: false }
//   console.log(gen.next('b')); // { value: 2, done: false }
//   console.log(gen.next('c')); // { value: 3, done: false }
//   console.log(gen.next('d')); // { value: ['a', 'b', 'c'], done: true }

// doTaskWithAyncAwait();
handleGeneratorFunc();






