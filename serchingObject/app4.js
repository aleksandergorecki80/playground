

const arr = [{ col: 0, row:0 }];
console.log(arr);
function addElementsOfArray(newArr){
    return [...arr, ...newArr];
}

const found = function find(numbers) {
    return arr.find(function(obj) {
      return obj.col === numbers.col && obj.row === numbers.row;
    });
  };

const newArr = [
    { col: 18, row: 1 },
    { col: 7 , row: 1},
    { col: 0 , row: 0}
];



let howManyFound ='';

newArr.forEach(element => {
    console.log('found = ',found(element));    
    if(found(element)===undefined){
        howManyFound++;
    }
    
});
if(howManyFound === newArr.length){
    const endArr = addElementsOfArray(newArr);
    console.log(endArr);
}





