//takes 2 paramaters, a starting number and an end number, creates an array for all numbers between and excludes anything with the number 5 in it. The array includes the start and end number as long as it doesnt have a 5 in it. 

function dontGiveMeFive(start, end){

  var arr = [];

  for(var i = start; i <= end; i++){
    const check = i.toString().split('').includes('5');
    if (check == false){
      arr.push(i)
    }
  }
  return arr;
}

// Given a string of words, the findShort() function returns the length of the shortest word(s). The function assumes the String will never be empty.

function findShort(string){

  var word = "";
  var word_array = [];
  var shortestWord = "";

  for(var i = 0; i <= string.length-1; i++){
    word += string[i];
    if (string[i] == " "){
      word_array.push(word)
      var word = "";
    }
  };
  word_array.push(word)
  shortestWord = word_array[0]

  word_array.forEach(function(x){
    if(shortestWord.length > x.length){
      shortestWord = x
    }
  })

  return shortestWord;

};

//test cases

console.log(findShort("hello big world"))
console.log(findShort("The function assumes the String will never be"))
console.log(findShort("does not account for different data types"))