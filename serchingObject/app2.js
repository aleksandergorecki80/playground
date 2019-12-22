let arr = [{row: 6, column: 1}, {row: 6, column: 2},{row: 5, column: 1}];

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


function findInArrayFromArrau(numbers){
    return arr.find(function(obj){
         return obj.col === numbers.col && obj.row === numbers.row;
    });
}

const numbers = [{row: 6, column: 1}, {row: 8, column: 1}];



var myArray = [
    {id:1, name:"bob"},
    {id:2, name:"dan"},
    {id:3, name:"barb"},
   ];
const myItems = [2, 3];
   
   // grab the Array item which matchs the id "2"
   var item = myArray.find(item => item.id === 2 );
   

   var mySecondArray = [
    {id:1, name:"bob"},
    {id:2, name:"dan"},
    {id:3, name:"barb"},
   ];


myItems.forEach(item => {
    mySecondArray.find((element)=>{
        console.log(item === element.id); 

    });
});
   // print
//    console.log(item.name);


