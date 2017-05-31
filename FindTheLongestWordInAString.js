function findLongestWord(str) {
	var Longest = 0;
  str=str.split(" ");
  for(var i = 0; i < str.length ; i++){
      if(str[i].length > Longest){
      	Longest = str[i].length;
      }    
  }
  return(Longest);
}

findLongestWord("The quick brown fox jumped over the lazy dog");