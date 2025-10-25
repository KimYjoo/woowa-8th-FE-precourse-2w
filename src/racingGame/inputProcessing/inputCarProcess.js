class Car {
    constructor({carName}) {
        this.carName = carName;
        this.progress = 0;
    }
}

export default function inputCarProcess(rawCarString){
    const strippedString = rawCarString.trim();
    const splittedArray = strippedString.split(',');
    const carObjescts = splittedArray.map((name) => new Car({carName: name}));
    return carObjescts;
}