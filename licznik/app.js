const row = Math.floor(Math.random() * 3);
const col = Math.floor(Math.random() * 3);

// 0 prawo 1 duł 2 lewo 3 góra
function choseDirection(){
    return Math.floor(Math.random() * 4);
}


// check if posible
function checkMove (move){
    console.log('My move is ', move);
    switch (move) {
        case 0:
          return col + 1 < 3;
          break;
        case 1:
          return row + 1 < 3;
          break;
        case 2:
          return col - 1 >= 0;
          break;
        case 3:
          return row - 1 >= 0;
          break;
      }
}

console.log(row, col);

const myDirection = choseDirection();
console.log('My direction = ', myDirection);

const isPosible = checkMove(myDirection);
console.log(isPosible);


function prawdziwyMowe(){
    console.log('Robie move');
}


while (!isPosible) {
    console.log('Not Posible'); 
    if (isPosible) {      
        console.log('Posible');      
        break;
    } 
}