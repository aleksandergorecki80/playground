function Board() {
  this.boardFieldsTaken = [];
  this.surroundings = [];
  this.fields = [
    { id: 4, row: 0, column: 5 },
    { id: 4, row: 4, column: 6 }
  ];

  this.addSurroundings = function() {
    return this.fields.map(field => {
      let newArray = [
        { row: field.row, column: field.column + 1 },
        { row: field.row + 1, column: field.column + 1 },
        { row: field.row + 1, column: field.column },
        { row: field.row + 1, column: field.column - 1 },
        { row: field.row, column: field.column - 1 },
        { row: field.row - 1, column: field.column - 1 },
        { row: field.row - 1, column: field.column },
        { row: field.row - 1, column: field.column + 1 }
      ];
      return newArray;
    });
  };
  this.pushOneOccurrenceOfFieldToSurroundings = function(arr) {
    for (i = 0; i < arr.length; i++) {
      let znalaz = this.surroundings.find(element => {
        return (element.row === arr[i].row && element.column === arr[i].column) 
                || (arr[i].row<0 || arr[i].column<0);
      });
      if (!znalaz) {
        this.surroundings.push(arr[i]);
      }
    }
  };
}

const ship = new Board();

const shipSarr = ship.addSurroundings();

// console.log(shipSarr);

let arr = [];
shipSarr.forEach(element1 => {
  element1.forEach(element => {
    arr.push(element);
  });
});

console.log(arr);
ship.pushOneOccurrenceOfFieldToSurroundings(arr);
console.log("ship.surroundings", ship.surroundings);

// const arr1 = [4, 5, 5, 6, 6, 7];
// const arr2 = [];
// for (i = 0; i < arr1.length; i++) {
//   let znalaz = arr2.find(element => {
//     return element === arr1[i];
//   });
//   if (!znalaz) {
//     arr2.push(arr1[i]);
//   }
// }

// console.log(arr2);

// var numbers = [65, 44, 12, 4];
// var newarray = numbers.map(myFunction)

// function myFunction(num) {
//   return {a: num * 10, b: num*5};
// }

// console.log(newarray);

// var ages = [3, 10, 18, 20];

// function checkAdult(age) {
//   return age >= 18;
// }

// const findAges = ages.find(age=>{

// });
//  console.log(findAges);
