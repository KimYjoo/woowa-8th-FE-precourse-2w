import { Console } from "@woowacourse/mission-utils";
import { Message } from "../constants/message.js";
import { GameSettings } from "../constants/gameSettings.js";

export function printRaceHeader() {
  Console.print(Message.RACE_HEADER);
}
export function printWinners(winnerList) {
  Console.print(`${Message.PREFIX_WINNER}${stringizeList(winnerList)}`);
}
function stringizeList(rawlist) {
  return rawlist.join(GameSettings.STRINGIZE_DELIMITER);
}
export function printSingleAttemptResult(carList) {
  carList.forEach((car) => {
    Console.print(`${car.carName} : ${visualizeProgress(car.progress)}`);
  });
}
function visualizeProgress(progress) {
  return Array.from(
    { length: progress },
    (v, k) => GameSettings.PROGRESS_VISUAL
  ).join(GameSettings.VISUAL_SPACE);
}
export function printErrorMessage(error) {
  Console.print(error.message);
}
