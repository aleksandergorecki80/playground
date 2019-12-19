console.log("kki3");


  //  return {row: 1, col:1};


// const numbers = newMumbers();

//  const found = function find(numbers){
//     return arr.find(function(obj){
//          return obj.col === numbers.col && obj.row === numbers.row;
//     });
// }



// console.log("newMumbers", numbers);
// console.log("found", found(numbers));


// if (found(numbers) == undefined) {
//   console.log("jest undefind");
// } else {
//   console.log("nie jest");
// }

// let i = numbers;

let arr = [{ row: 1, col: 1 }];

const newMumbers = function newNumbers() {
  const row = Math.floor(Math.random() * 2);
  const col = Math.floor(Math.random() * 2);
  return { row, col };
};

const found = function find(numbers) {
    return arr.find(function(obj) {
      return obj.col === numbers.col && obj.row === numbers.row;
    });
  };



// let length = arr.length;
// do {
  
//   let numbers = newMumbers();
//   console.log("numbers", numbers);
//   console.log(found(numbers));
//   k++;
//   if (found(numbers) == undefined) {
//     arr.push(numbers);
//   }
// } while (arr.length == length);


let k = 0;    // opcjonalnie
for(const length = arr.length; length==arr.length;){
  let numbers = newMumbers();
  console.log("numbers", numbers);
  console.log(found(numbers));
  k++;
  if (found(numbers) == undefined) {
    arr.push(numbers);
  }
}
console.log("k", k);
console.log(arr);
console.log(arr.length);
console.log('arr.length+1', arr.length+1);


