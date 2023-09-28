class FizzBuzz{
    constructor(start, end){
      this.start=start;
      this.end=end;
    }
    
    calculateFizzBuzz(){
      for(let i=this.start; i<=this.end; i++){
        let ofThree=i %3===0;
        let ofFive= i % 5===0;
        console.log(ofThree?(ofFive? "FizzBuzz":"Fizz") :ofFive? "Buzz": i);
      }
    }
  }
  
  const classInstance= new FizzBuzz(1, 100);
  classInstance.calculateFizzBuzz();