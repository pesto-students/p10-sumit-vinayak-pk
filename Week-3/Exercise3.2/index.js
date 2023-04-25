// Example for Call 

function speedDesc(color, model){
   console.log(`${this.name} ${model} of color ${color} has a top speed of ${this.speed}`);
}

const car = {
    name:'BMW',
    speed:'320km/h'
}

speedDesc.call(car, 'Red' , '530d');

// Example for apply
 function checkLoad(...load){
    const totalLoad = load.reduce((a,b) => a+b, 0);
    if(this.load < totalLoad){
        console.log(`${this.model} with registeration number ${this.regno} is Over weight`)
    }else{
        console.log(`${this.model} with registeration number ${this.regno} is good to go`)
    }
 }

 const truckObj1 = {
    load:150,
    model: 'Tata 1512 LPT',
    regno: 'MH04 100'
 }
 
 const loads = [2,3,4,500,6]

 checkLoad.apply(truckObj1, loads )

 // Example for bind

 function data(){
    
 }