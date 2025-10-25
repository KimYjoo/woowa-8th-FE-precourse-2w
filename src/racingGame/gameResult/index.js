import { Console } from '@woowacourse/mission-utils'

export default function getRaceWinner(carObjectList){
    const carProgressList = Array.from(carObjectList, (car, index) => car.progress);
    const maxProgress = Math.max(...carProgressList);
    const raceWinner = [];
    Array.from(carObjectList, (car, index) => {
        if(car.progress === maxProgress) raceWinner.push(car.carName);
    });
    const raceWinnerString = raceWinner.join(', ');
    Console.print(`최종 우승자 : ${raceWinnerString}`);
}