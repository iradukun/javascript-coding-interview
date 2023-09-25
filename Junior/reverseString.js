const string="Welcome to this javascript Guide!";
const reverseBySeparator=(string, separator)=>{
  return string.split(separator).reverse().join(separator);
}
const reverseEntireSentence=reverseBySeparator(string, "");
const secondSeparator= " ";
const reverseEachWord=reverseBySeparator(reverseEntireSentence, secondSeparator);

const answer=()=>{
  console.log(reverseEachWord);
}
answer();