console.log('whileWithMultipleContition.js');


let a = 7;
let b = 0;
do{
console.log('Drukujemy a ', a);
console.log('Drukujemy b ', b);
b++;
}while(a<5 && b<5);



for(a=2 , b=0; a<5 && b<5; a++, b++){
    console.log('Drukujemy z fora a ', a);
    console.log('Drukujemy  fora b ', b);
}