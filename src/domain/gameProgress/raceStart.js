import { Console } from "@woowacourse/mission-utils"
export default function raceStart({attemptNumber, carObjectList}){
    for(let i = 0; i < attemptNumber; i++){
        carObjectList.forEach((car) => {
            car.move();
            car.printProgress();
        });
        Console.print('');
    }
}
