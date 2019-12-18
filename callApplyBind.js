// Call i apply
var obj = {num: 2};

var addToThis = function(a, b, c){
    return this.num + a + b + c;
};

console.log(addToThis.call(obj, 3, 1, 2));

// przy apply mozna wysylac tablice jako argument
const arr = [1,2,3];
console.log(addToThis.apply(obj, arr));



// What is bind

const c1 = {
    x: 5,
    y: 10
};

const c2 = {
    x: 55,
    y: 110
};

function printCoordinates(){
    console.log(c1);
    console.log(this.x + ' - ' + this.y);
}

const c1Function = printCoordinates.bind(c1);
c1Function();
const c2Function = printCoordinates.bind(c2);
c2Function();
