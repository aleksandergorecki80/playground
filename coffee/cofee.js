console.log('kki');
function Cofee(roast, ounces){
    this.roast = roast;
    this.ounces = ounces;
    this.size = '';

    this.getSize = function(){
        if(this.ounces === 8){
            this.size = 'small';
        } else if(this.ounces === 12) {
            this.size = 'medium';
        } else {
            this.size = 'large'
        }
        // return this.size;
    }
    this.toString = function(){
        this.getSize();
        return `You've ordered a ${this.size} ${this.roast} cofee`;
    }

}

const myCofee = new Cofee('Late', 12);
// myCofee.getSize();
const message = myCofee.toString();
console.log(message);