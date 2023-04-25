function createStack(){
    const items  = [];
    return {
        items, // will return items reference
        push:function(val){ // push function
           items.push(val);
        },
        pop: function(){
           items.pop();
        }
    }
}

const stack = createStack();

console.log(stack.items);
stack.push(10);
stack.push(14);
stack.push(19);
console.log(stack.items);
stack.pop();
console.log(stack.items);



