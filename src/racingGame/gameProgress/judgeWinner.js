import { Console } from '@woowacourse/mission-utils'

export default function judgeWinner(carObjectList){
    const carProgressList = Array.from(carObjectList, (car, index) => car.progress);
    const maxProgress = Math.max(...carProgressList);
    const raceWinnerArray = [];
    Array.from(carObjectList, (car, index) => {
        if(car.progress === maxProgress) raceWinnerArray.push(car.carName);
    });
    const raceWinnerString = raceWinner.join(', ');
    Console.print(`최종 우승자 : ${raceWinnerString}`);
}