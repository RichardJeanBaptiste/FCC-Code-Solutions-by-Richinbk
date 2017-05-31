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