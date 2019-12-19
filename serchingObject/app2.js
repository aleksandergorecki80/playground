let arr = [];

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

const numbers = newMumbers();
let numbersFound = found(numbers);;
let i =0;
while(!numbersFound){
        numbersFound = found(numbers);
    if(!numbersFound){
        arr = [...arr, numbers];
    }
}





console.log(arr);
console.log(i);