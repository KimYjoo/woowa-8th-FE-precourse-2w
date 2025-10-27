import Car from "../Car.js";
export default function inputCarProcess(rawCarString){
    const strippedString = rawCarString.trim();
    const splittedArray = strippedString.split(',');
    const carObjects = splittedArray.map((name) => new Car({carName: name}));
    return carObjects;
}