let arr = [{row: 1, col:1}];

const newMumbers = function newNumbers(){
    const row = Math.floor(Math.random() * 2);
     const col = Math.floor(Math.random() * 2);
     return {row, col};
 }
 

 const found = function find(numbers){
    return arr.find(function(obj){
         return obj.col === numbers.col && obj.row === numbers.row;
    });
}

/// to jest dobre do uzycia potem
const numbers = newMumbers();
console.log(numbers)
if (found(numbers)){
    console.log('znalaz')
} else {
    console.log('nie znalaz')
   arr = [...arr, numbers];

}

console.log(arr);