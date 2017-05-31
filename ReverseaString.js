function reverseString(str) {
  //split the string 
  str=str.split("");
   //reverse the string
  str=str.reverse();
   //join the string
  str=str.join("");
  
  return(str);
  // you acheive the same effect in a single line
  //str=str.split("").reverse().join("");
}

reverseString("hello");