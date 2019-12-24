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
    this.compareSteps = function(nextStep){
        return this.steps[0] === nextStep;
    }
}


const los2 = new Losowanie();

let randomStep2 = '';
for(let i  = 0; i<2; i++){


    randomStep2 = los2.randomStep();
    console.log('randomStep2', randomStep2);
    
     
    console.log('wykonuje krok');
    los2.setStep(randomStep2);    
    console.log('los2.steps', los2.steps);

    if(i>0){
        console.log('trzeba sprawdzic czy mozna');
        console.log('randomStep2 w drugim losowaniu', randomStep2);
        let comparedSteps = los2.compareSteps(randomStep2);
        console.log('compareSteps', comparedSteps)
        do{
            randomStep2 = los2.randomStep();
            comparedSteps = los2.compareSteps(randomStep2);
            console.log('compareSteps w while', comparedSteps)
        }while(!comparedSteps)
    }

}