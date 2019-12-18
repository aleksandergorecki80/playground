var balance = 10500;
var camraOn = true;

function steal(amount){
    camraOn = false;
    if(amount<balance) {
        balance = balance - amount;
    }
    camraOn = true;
    return amount;
}

var amount = steal(1250);

console.log(amount);
console.log(balance);