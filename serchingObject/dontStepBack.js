function Losowanie(){
    this.oposits = [2, 3, 0, 1];        // indeks tabeli [0,1,2,3]ma watrosc wylosowanego kroku, wartosc w indeksie to krok naprzeciwko ktorego nie mozna wykonac 
    this.steps = [];

    this.randomStep = function(){
        return Math.floor(Math.random()*4);
    }

    this.setStep = function(step){
        this.steps = [...this.steps, step];
    }

    this.updateSteps = function(steps){
        
    }
    this.compareSteps = function(nextStep, lastStep){
        return this.steps[lastStep] === this.oposits[nextStep];
    }
}


const los2 = new Losowanie();

let randomStep2 = '';
for(let i  = 0; i<2; i++){
if(i===0){
    const randomStep2 = los2.randomStep();
    console.log('randomStep2', randomStep2);
    
     
    console.log('wykonuje krok');
    
    
    los2.setStep(randomStep2);    
    console.log('los2.steps', los2.steps);
} else if(i>0){
        let lastStep = i-1;
        console.log('trzeba sprawdzic czy mozna');
        do{
            randomStep2 = los2.randomStep();
            console.log('randomStep2 w petli', randomStep2)
            comparedSteps = los2.compareSteps(randomStep2, lastStep);
            console.log('compareSteps w while', comparedSteps)
        }while(comparedSteps);
        los2.setStep(randomStep2);    
        console.log('los2.steps', los2.steps);
    }

}