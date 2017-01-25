/**
 *
 */
// alert('working!')
// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(numA, numB){
    "use strict";
    //...
    if (numA > numB) {
      return numA
    } else {
      return numB
    }
}
console.assert(max(4,5) == 5);
console.assert(max(9,7) == 9);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(numA, numB, numC){
    "use strict";
    //...
    if(numA > numB && numA > numC){
      return numA
    }
    if(numB > numA && numB > numC){
      return numB
    }
    if(numC > numA && numC > numB){
      return numC
    }

}
console.assert(maxOfThree(10, 5, 6) == 10);
console.assert(maxOfThree(3,7,32) == 32);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
      return true;
      }
    //  else {
    //   return false;


}
console.assert(isVowel('a') == true)

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
    var string = phrase.split('');
    var newPhrase = '';
    for (var i =0; i < string.length; i++)
    if (string[i] == ' '){
      newPhrase += string[i]
    }else
    if (!isVowel(string[i])){
      var newString = string[i] + 'o' + string[i];
      var newPhrase = newPhrase + newString;
    }else {
      newPhrase += string[i]
    }
      // console.log(newPhrase);
    return newPhrase;
}
// console.log(rovarspraket('good dog'));
console.assert(rovarspraket("good") == "gogoodod");
console.assert(rovarspraket("good dog") == "gogoodod dodogog");

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";
    //...
    var total = 0;
    for(var i = 0; i < array.length; i++){
      total += array[i];
    }
    return total;
}
// console.log(sum([1,2,3,4]));
console.assert(sum([1,2,3,4]) == 10)


function multiply(array){
    "use strict";
    //...
    var total = 1;
    for (var i = 0; i < array.length; i++){
      total *= array[i];
    }
    return total;
}
// console.log(multiply([1,2,3,4]));
console.assert(multiply([1,2,3,4]) == 24)

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";
    //...

    var stringRev = string.split('').reverse().join('');
    return stringRev
}
console.assert(reverse('rest') == 'tser');
console.assert(reverse('rest tar') == 'rat tser');

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
    var longest = 0;
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longest){
        longest = words[i].length;
      }
    }
    return longest;
    console.log(longest);
}

console.assert(findLongestWord (['yes', 'no', 'then', 'longer']) == 6);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
