console.log("kki3");

<<<<<<< HEAD
let arr = [{ row: 1, col: 1 }];
=======
const arr = [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 0 }];
console.log('arr na poczatku', arr);
>>>>>>> 803edeadc3b832a786864385b4a37add2c65980b

// const newMumbers = function newNumbers() {
//   const row = Math.floor(Math.random() * 2);
//   const col = Math.floor(Math.random() * 2);
//   return { row, col };
// };

const newMumbers = function newNumbers() {
<<<<<<< HEAD
  const row = Math.floor(Math.random() * 2);
  const col = Math.floor(Math.random() * 2);
  return [{ row, col }];
=======
  const newNumArr = [];
  for (i = 0; i < 2; i++) {
    const row = Math.floor(Math.random() * 4);
    const col = Math.floor(Math.random() * 4);
    newNumArr.push({ row: row, col: col });
  }
  return newNumArr;
>>>>>>> 803edeadc3b832a786864385b4a37add2c65980b
};

const found = function find(numbers) {
  return arr.find(function(obj) {
    return obj.col === numbers.col && obj.row === numbers.row;
  });
};

// const testNumbers = [{row: 1, col: 1}, {row: 1, col: 1}, {row: 1, col: 0}];

// testNumbers.forEach(element => {
//   console.log(found(element));
// });

// to działa ponizej
// ale nie dokońca
// trzeba zrobić zmienną która liczy ile jest found undefined
// i jesli mniej niz potrzeba to nie pozwala zrobić pusch numbers


for (let length = arr.length; length+2 !== arr.length; ) {
  let numbers = newMumbers(); // czyli tworzenie statku razem z dodawaniem pól
  // let numbers = [{ row: 0, col: 0 }, { row: 1, col: 1 }]; // czyli tworzenie statku razem z dodawaniem pól
  let emptySpacesFound = 0;
  numbers.forEach(element => {

    if(found(element) === undefined){
      console.log(found(element));
      console.log('nie znalaz w tablicy mozna dodac', emptySpacesFound);
      emptySpacesFound++;
      
      if(emptySpacesFound==2){
        console.log(emptySpacesFound);
        numbers.forEach(element => {
          arr.push(element);
        });
      }
    }
  });

<<<<<<< HEAD

  // to jest dobre

// let k = 0;    // opcjonalnie
// for(const length = arr.length; length==arr.length;){
//   let numbers = newMumbers();
//   console.log("numbers", numbers);
//   console.log(found(numbers));
//   k++;
//   if (found(numbers) == undefined) {
//     arr.push(numbers);
//   }
// }
// console.log("k", k);
// console.log(arr);
// console.log(arr.length);
// console.log('arr.length+1', arr.length+1);

=======
  
 console.log('length', length+2)
 console.log("emptySpacesFound", emptySpacesFound);
}
>>>>>>> 803edeadc3b832a786864385b4a37add2c65980b

console.log("arr", arr);
console.log("arr length", arr.length);
