import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import { ErrorMessage } from "../constants/message.js";
import { GameSettings } from "../constants/gameSettings.js";

export default class RacingGame {
  #carObjects;

  constructor(carNames) {
    this.#validateCarNames(carNames);
    this.#carObjects = carNames.map((name) => new Car({ carName: name }));
  }

  getCarStatusList() {
    return this.#carObjects.map((car) => car.carStatus);
  }

  runSingleAttempt() {
    this.#carObjects.forEach((car) =>
      car.move(MissionUtils.Random.pickNumberInRange(0, 9))
    );
  }

  judgeWinner() {
    const maxProgress = this.#getMaxCarProgress();
    const winnerList = this.#getRaceWinnerList(maxProgress);
    return winnerList;
  }
  #validateCarNames(carNames) {
    // 자동차 이름이 중복됐을 경우
    const uniqueNames = new Set(carNames);

    if (uniqueNames.size !== carNames.length)
      throw new Error(
        `${ErrorMessage.PREFIX} ${ErrorMessage.CAR_NAME_DUPLICATION}`
      );
    // 자동차 이름이 너무 길 경우
    const hasInvalidLength = carNames.some(
      (car) => car.length > GameSettings.MAX_NAME
    );
    if (hasInvalidLength)
      throw new Error(`${ErrorMessage.PREFIX} ${ErrorMessage.CAR_NAME_LIMIT}`);
  }
  #getMaxCarProgress() {
    const maxProgress = this.#carObjects.reduce((currMax, car) => {
      return Math.max(currMax, car.progress);
    }, -Infinity);
    return maxProgress;
  }
  #getRaceWinnerList(maxProgress) {
    const raceWinners = this.#carObjects.reduce((winner, car) => {
      if (car.progress === maxProgress) {
        winner.push(car.carName);
      }
      return winner;
    }, []);
    return raceWinners;
  }
}
