// a callback function is a function that is passed to another function as an argument and is executed after someoperation has been completed.


// For example

const modifyArray=(arr,callback)=>{
    arr.push(100);
    
    callback();
  }
  const arr=[1,2,3,4];
    
  modifyArray(arr,()=>{
    console.log("the modified array", arr);
  })