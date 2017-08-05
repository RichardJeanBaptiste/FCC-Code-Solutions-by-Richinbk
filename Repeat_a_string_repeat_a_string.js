
function repeatStringNumTimes(str, num) {
  
  // make an empty array to store values
  var endstr = [];

  // loop for num of times in second argument
  for(var i = 0 ; i < num ; i++){
  	// use the method .push() to push str(first argument) num(second argument) times
    endstr.push(str);
  }

  // join the array
  endstr=endstr.join("");
  return endstr;
  
}

repeatStringNumTimes("abc", 3);
