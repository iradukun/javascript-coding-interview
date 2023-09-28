const mul=(x)=>{
    return (y)=>{
    return (z)=>{
        return x*y*z;
    }
    }
}

console.log(mul(1)(1)(1));
