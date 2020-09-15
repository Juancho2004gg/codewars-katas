//Link: https://www.codewars.com/kata/586d6cefbcc21eed7a001155/javascript

/* Details:
For a given string s find the character c (or C) with longest consecutive repetition and return:
[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
Happy coding! :)

*/

//solution

function longestRepetition(string) {
if(string === ""){return ["",0]}
  
const repeatedChars = string.match(/(.)\1*/g);
const longestLength = Math.max(...repeatedChars.map(string=>string.length));
const longestChars = repeatedChars.filter(string => string.length == longestLength)

  return [longestChars.join("").slice(0,1),longestLength]
  
};
