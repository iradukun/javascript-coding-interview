for(let i=1; i<=100;i++){
    let ofThree=i%3===0;
    let ofFive= i%5===0;
    console.log(ofThree?(ofFive? 'FizzBuzz' :'Fizz'):ofFive?'Buzz':i);
    
  }