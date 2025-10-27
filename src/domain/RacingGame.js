import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

export default class RacingGame {
  #carObjects;

  constructor(carNames) {
    this.#carObjects = carNames.map(
      (name) => new Car({ carName: name.trim() })
    );
  }

  get carStatusList() {
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
