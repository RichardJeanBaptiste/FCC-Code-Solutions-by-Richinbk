/*
   Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/



function palindrome(str) {
	// make the string lower case
  str=str.toLowerCase();
   // replace all the non-alpha characters using .replace
   //* .replace() uses regex or Regular expressions so you should google that if its confusing you
  str=str.replace(/[^0-9a-zA-Z]/g, '');
  // create a new variable give it the value of str and reverse it
  //* If need a reminder on how to reverse strings look at the reverse a string file in this repo
  var reverse=str.split("").reverse().join("");
  // Then create a simple if/else statement to check if str and reverse are equal
  if(str === reverse){
  	return true;
  }else{
  	return false;
  }
}



palindrome("A man, a plan, a canal. Panama");