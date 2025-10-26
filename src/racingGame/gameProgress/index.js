import { Console, MissionUtils } from "@woowacourse/mission-utils"

export default function racingGame({attemptNumber, carObjectList}){
    // Console.print('실행 결과');
    for(let i = 0; i < attemptNumber; i++){
        carObjectList.forEach((car) => {
            if(MissionUtils.Random.pickNumberInRange(0, 9) >= 4) car.progress += 1;
            const progressHyphens = Array.from({length:car.progress},(v, k) => ('-')).join('');
            Console.print(`${car.carName} : ${progressHyphens}`);
        });
        Console.print('');
    }
}
