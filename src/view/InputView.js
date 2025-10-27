import { Console } from '@woowacourse/mission-utils'
import * as Validation from './Validation.js';


export async function readCarNames(){
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    Validation.validateCarInput(carNames);
    return inputCarProcess(carNames);
}
function inputCarProcess(rawCarString){
    const strippedString = rawCarString.trim();
    const splittedArray = strippedString.split(',');
    return splittedArray;
}
export async function readAttemptCount(){
    const attemptCount =  await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    Validation.validateAttemptInput(attemptCount);
    return attemptCount;
}
