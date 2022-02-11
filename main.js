/*-----------------------------------------------------------------
Challenge: 26-toCamelCase
Difficulty:  Intermediate
Prompt:
- Write a function called toCamelCase that accepts a single string as argument.
- The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.
Hints:
- This is a great challenge for using regular expressions combined with the String.replace method.
Examples:
toCamelCase( 'wdi-rocks' ) // => 'wdiRocks'

toCamelCase( 'Mama-mia' ) // => 'MamaMia'
-----------------------------------------------------------------*/
// Your solution for 26-toCamelCase here:

const toCamelCase = (str) => {
  let strAsArr
  str.includes('-') ? strAsArr = str.split('-') : strAsArr = str.split('_');
  


for(let i = 1; i < strAsArr.length; i++) {
  // debugger
  let tempStr = strAsArr[i];
  tempStr =  tempStr.charAt(0).toUpperCase() + tempStr.slice(1);
  strAsArr.splice(i, 1, tempStr);
}

return strAsArr.join('')

}
// console.log(toCamelCase( 'Mama-mia' )) // => 'MamaMia'
console.log(toCamelCase( 'A_b_c' )); // => 'ABC'
console.log(toCamelCase( 'banana_Turkey_potato' ))