// const ship = [
//     {row:1, col:6}, 
//     {row:2, col:6}
// ];

const newMumbers = function newNumbers(){
    const row = Math.floor(Math.random() * 6);
     const col = Math.floor(Math.random() * 6);
     return [{row, col}];
 }

function addElementsOfArray(one, two, three){
    return [...one, ...two, ...three];
}



const view = [
    {row:0, col:0}, 
    {row:1, col:1},
    {row:1, col:2},
    {row:1, col:0}
];

function findInArray(ship, view){
    for(let i=0; i<ship.length; i++){
        for(let k=0; k<view.length; k++){
            console.log('ship', ship[i], 'view = ', view[k]);
        if(ship[i].row === view[k].row && ship[i].col === view[k].col){
            console.log('zgadzasie');
            return  true;
        }
        }
    } 
};

let found = true;
let ship = [];
do{
    const one = newMumbers();
    const two = newMumbers();
    const three = newMumbers();
        
    
    ship = addElementsOfArray(one, two, three);
    // ship = addElementsOfArray(one);
    found = findInArray(ship, view); 
    console.log('ship', ship);
}
while(found);


console.log(found);
// console.log(findInArray(ship, view));

console.log('SHIP END == ' , ship);

// for(i = 0, j = 0; (i < ship.length)  || (j < view.length); i++, j++){
//     console.log('i = ', i, 'j = ', j);
//     if(ship[i].row === view[j].row && ship[i].col === view[j].col){
//         console.log('liczba elementow sie nie zgadzasie');
// //  ta petla nie zadziala gdyz w jednej z tablic jest mniej elementow
//     }
// }