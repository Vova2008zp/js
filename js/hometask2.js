"use strict";

//Функция которая принимает строку и возвращает количество слов в ней
const str1 = "Lorem ipsum dolor sit amet consectetur";

const DISALLOWED_WORDS = ["", "-", "=", "+", ",", ".", "(", ")"];

const wordsCount = (str, dissallowedWordsArray = DISALLOWED_WORDS) =>
  str.split(" ").filter((word) => !dissallowedWordsArray.includes(word)).length;

console.log(wordsCount(str1));

//Функция, которая получает строку и возвращает размер самого большого слова в ней
function theBiggestSizeWord(str) {  
  const wordsArr = str.split(' ');

  let longestWord = wordsArr[0];

  for (i = 1; i < wordsArr.length; i++) {
    if (longestWord.length < wordsArr[i].length) {
      longestWord = wordsArr[i];
    }
  }
  return longestWord.length;
}
console.log(theBiggestSizeWord(str1));
