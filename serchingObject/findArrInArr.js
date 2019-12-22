// const ship = [
//     {row:1, col:6}, 
//     {row:2, col:6}
// ];

const newMumbers = function newNumbers(){
    const row = Math.floor(Math.random() * 2);
     const col = Math.floor(Math.random() * 2);
     return [{row, col}];
 }

function addElementsOfArray(start, newArr){
    return [...start, ...newArr];
}

const start = [];
const newArr = newMumbers();

const ship = addElementsOfArray(start, newArr);
console.log('ship', ship);

const view = [
    {row:0, col:0}, 
    {row:1, col:1},
    {row:1, col:0}
];

function findInArray(ship, view){
    for(let i=0; i<ship.length; i++){
        for(let k=0; k<view.length; k++){
            console.log('ship', ship[i], 'view = ', view);
        if(ship[i].row === view[k].row && ship[i].col === view[k].col){
            console.log('zgadzasie');
            return  true;
        }
        }
    } 
};

const found = findInArray(ship, view); 
console.log(found);
// console.log(findInArray(ship, view));

