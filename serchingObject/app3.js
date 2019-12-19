console.log('kki3')

let arr = [{row: 1, col:1}];

const newMumbers = function newNumbers(){
    const row = Math.floor(Math.random() * 2);
     const col = Math.floor(Math.random() * 2);
     return {row, col};
 }
 
 const numbers = newMumbers();

 const found = function find(numbers){
    return arr.find(function(obj){
         return obj.col === numbers.col && obj.row === numbers.row;
    });
}

 console.log('newMumbers', numbers);
// console.log('found', found(numbers));

let i =0
for(newMumbers();
(found(numbers)) && i<1;
     newMumbers() 
     ){
    console.log('found', found(numbers));
    console.log('numbers',newMumbers());
    console.log('i',i);
    i++;
}

console.log(arr);


















// let i = Math.floor(Math.random() * 3);
// do{
    
    
//     console.log(i);
//     i = Math.floor(Math.random() * 3);
// }
// while(
// i!==1
// )