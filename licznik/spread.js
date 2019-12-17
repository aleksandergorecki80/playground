const obj =[{
    id: 1,
   name: 'kki'
 }];
 
 
 const obj2 = [...obj, {id2: 'jjk'}];
 
 console.log(obj2);
 

 function printName(first, last){
     console.log(`${first} ${last}`);
     this.price = 557;
     console.log(this);
     
 }

 // funkcja call jako pierwszy argument przyjmuje wartość dla this
 // pozostałe argumenty idą potem
 printName.call({
    model: "Samsung Galaxy",
    color: 'Black'
 }, "Janek", "Kowalski"); 

 const printName2 = printName.bind({
    model: "Nokia 333",
    color: 'Silver'
 }, 'Juzek', "Wuzek");

 printName2();