function findLongestWord(str) {
	// Create a variable and set it = to 0
	var Longest = 0;
	// split the string so that we can loop through it
	//*Make sure when using split to add a space between qoutation marks
	//str.("") returns ["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x", " ", "j", "u", "m", "p", "e", "d", " ", "o", "v", "e", "r", " ", "t", "h", "e", " ", "l", "a", "z", "y", " ", "d", "o", "g"]
	//str.(" ") returns ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
  str=str.split(" ");
  
  // create a for loop to go through each word in the string
  for(var i = 0; i < str.length ; i++){
  	//create an if statement that checks if the length of str at the position of i is greater than the value of your variable
  	 if(str[i].length > Longest){
  	// if its greater set = to variable
      	Longest = str[i].length;
      }    
  }
  return(Longest);
}

findLongestWord("The quick brown fox jumped over the lazy dog");