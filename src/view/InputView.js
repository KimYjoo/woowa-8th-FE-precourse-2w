import { Console } from '@woowacourse/mission-utils'
import * as Validation from './Validation.js';
import { Message } from '../constants/message.js';
import { GameSettings } from '../constants/gameSettings.js';


export async function readCarNames(){
    const carNames = await Console.readLineAsync(Message.INPUT_CAR);
    Validation.validateCarInput(carNames);
    return inputCarProcess(carNames);
}
function inputCarProcess(rawCarString){
    const strippedString = rawCarString.trim();
    const splittedArray = strippedString.split(GameSettings.CAR_NAME_DELIMITER);
    return splittedArray;
}
export async function readAttemptCount(){
    const attemptCount =  await Console.readLineAsync(Message.INPUT_ATTEMPT);
    Validation.validateAttemptInput(attemptCount);
    return inputAttemptProcess(attemptCount);
}
function inputAttemptProcess(attempt){
    return Number(attempt);
}
