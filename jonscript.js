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