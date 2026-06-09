function filterStrings(words, maxLength) {
  var filteredArray = [];
 
  for (var i = 0; i < words.length; i++) {
   
    if (words[i].length <= maxLength) {
      filteredArray.push(words[i]);
    }
  }
 
  return filteredArray;
}
