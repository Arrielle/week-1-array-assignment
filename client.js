// This was how I worked the problem out initially;

// var myArray = ["DON'T", "WANT", "THESE", "WORDS", "I", "like", "to", "eat", "cake."];
// var myNum = 4;
//
// myFunction(myArray, myNum);
//
// function myFunction(array, num){
//   for (var i = 0; i < array.length; i++) {
//     if (i >= num){
//       console.log(array[i]);
//     }
//   }
// }

// After I got my code to work, I realized I was never asked to turn the array and chosen number a variable so rewrote it;

myFunction(["DON'T", "WANT", "THESE", "WORDS", "I", "like", "to", "eat", "cake."], 4);

function myFunction(array, num){
  for (var i = 0; i < array.length; i++) {
    if (i >= num){
      // console.log(array[i]);
        var arrayString = (array.substring(num, array.length));
        console.log(arrayString);
    }
  }
}



