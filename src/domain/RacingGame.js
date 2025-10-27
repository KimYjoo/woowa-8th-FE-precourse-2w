import Car from "./Car.js";

export default class RacingGame {
    constructor( carNames ){
        this.carObjects = carNames.map((name) => new Car({carName: name.trim()}));
    }
    runSingleAttempt(){
        this.carObjects.forEach((car) => car.move());
    }
    getAttemptResult(){
        return this.carObjects.map((car) => car.getCarProgress());
    }
    judgeWinner(){
        const maxProgress = this.getMaxCarProgress();
        const winnerList = this.getRaceWinnerList( maxProgress );
        return winnerList;
    }
    getMaxCarProgress(){
        const maxProgress = this.carObjects.reduce((currMax, car) => {
            return Math.max(currMax, car.progress);
        }, -Infinity);
        return maxProgress;
    }
    getRaceWinnerList( maxProgress ){
        const raceWinners = this.carObjects.reduce((winner, car) => {
            if( car.progress === maxProgress ){
                winner.push(car.carName);
            }
            return winner;
        }, []);
        return raceWinners;
    }

}