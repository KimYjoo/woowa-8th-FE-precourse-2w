export default class Car {
    #carName
    #progress
    
    constructor({carName}) {
        this.#carName = carName;
        this.#progress = 0;
    }

    get carName(){
        return this.#carName;
    }
    get progress(){
        return this.#progress;
    }
    get carStatus(){
        return { carName:this.#carName, progress:this.#progress };
    }

    move(randomNumber){
        if( randomNumber >= 4 ) this.#progress += 1;
    }
    
}
