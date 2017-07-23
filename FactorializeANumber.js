/*
  Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/




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