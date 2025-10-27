import { Console } from '@woowacourse/mission-utils'

export function printWinners( winnerList ){
    Console.print(`최종 우승자 : ${stringizeList(winnerList)}`);
}
function stringizeList( rawlist ){
    return rawlist.join(', ');
}
export function printSingleAttemptResult( carList ){
    carList.forEach((car) => {
        Console.print(`${car.carName} : ${progressToHyphens(car.progress)}`);
    })
}
function progressToHyphens(progress){
    return Array.from({length:progress},(v, k) => ('-')).join('');
}
