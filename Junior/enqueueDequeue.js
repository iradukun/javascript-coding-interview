class Queue{
    constructor(){
        this.inputStack=[];
        this.outputStack=[];
    }
    enqueue(item) {
        this.inputStack.push(item);
    }
    dequeue(){
        if(this.outputStack.length ===0){
            while( this.inputStack.length> 0){
                this.outputStack.push(this.inputStack.pop());
            }
        }
        return this.outputStack.pop();
    }
}
const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());

