// this.buildNewShip = function() {
//     this.ship.row = Math.floor(Math.random() * 10);
//     this.ship.column = Math.floor(Math.random() * 10);
//     return [{ id: 1, row: this.ship.row, column: this.ship.column }];
//   };

const newMumbers = function newNumbers(){
   const row = Math.floor(Math.random() * 2);
    const col = Math.floor(Math.random() * 2);
    return {row, col};
}


let arr = [
  
  { id: 1, col: 1, row: 1 },
  {col: 2, row: 1}
];

// const find = (obj) => arr.find(obj);

const found = function find(numbers){
    return arr.find(function(obj){
         return obj.col === numbers.col && obj.row === numbers.row;
    });
}
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]


const arr2 = arr.map((element)=>{
    return [
        {col: element.col, row: element.row},
        {col: element.col-1, row: element.row - 1},
        {col: element.col, row: element.row - 1},
        {col: element.col+1, row: element.row - 1},
        {col: element.col+1, row: element.row},
        {col: element.col+1, row: element.row + 1},
        {col: element.col, row: element.row + 1},
        {col: element.col-1, row: element.row + 1},
        {col: element.col-1, row: element.row},
    
    ];
});




console.log('arr2', arr2)





/// to jest dobre do uzycia potem
// const numbers = newMumbers();
// if (found(numbers)){
//     console.log('znalaz')
// } else {
//     console.log('nie znalaz')
//    arr = [...arr, {id: 3, col: numbers.col, row: numbers.row}];

// }


// arr3.forEach(item=>{
// console.log('item', item);
//     arr2.find((obj)=>{
//         for(let i=0; i<obj.length; i++){
//             console.log(obj[i]);
//         }
        
        
//     })
// });
// console.log(arr2);
// const kki2 = arr2.find(element => element.col == 1);
// console.log(kki2);
// const found2 = function findInArr(numbers){
//     return arr2.find(function(obj){
//          return obj.col == numbers.col && obj.row == numbers.row;
//     });
// }

// const kki = found2({ col: 1, row: 1 })

// console.log(kki);

function znajdz(param){
    arr2.forEach(function(data){

        for(let i=0; i<data.length; i++){
            if(param.col === data[i].col && param.row === data[i].row){
                console.log('analas');
            } else {
                arr.push({col: data[i].col, row: data[i].row})
            }
        }

        

    })
}
arr.forEach(function(param){
    znajdz(param);
});


console.log(arr);
