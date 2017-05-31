
function factorialize(num) {
	// create a variable = 1 to multiply numbers against
	var factor = 1;
	// create a for loop that loops through all the numbers before num
  for(var i = 1; i <= num; i++){
       factor = factor * i;
  }
  // return variable outside of loop so that it only returns final value
  return(factor);
}

factorialize(5);