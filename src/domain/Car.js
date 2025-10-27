export default class Car {
    constructor({carName}) {
        this.carName = carName;
        this.progress = 0;
    }
    move(randomNumber){
        if( randomNumber >= 4 ) this.progress += 1;
    }
    getCarProgress(){
        return { carName:this.carName, progress:this.progress };
    }
}
