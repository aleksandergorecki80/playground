console.log("kki3");

const arr = [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 0 }];
console.log('arr na poczatku', arr);

const newMumbers = function newNumbers() {
  const newNumArr = [];
  for (i = 0; i < 2; i++) {
    const row = Math.floor(Math.random() * 4);
    const col = Math.floor(Math.random() * 4);
    newNumArr.push({ row: row, col: col });
  }
  return newNumArr;
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

  
 console.log('length', length+2)
 console.log("emptySpacesFound", emptySpacesFound);
}

console.log("arr", arr);
console.log("arr length", arr.length);
