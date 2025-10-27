import * as InputView from "./view/InputView.js";
import * as OutputView from "./view/OutputView.js";
import RacingGame from "./domain/RacingGame.js";

class App {
  async run() {
    try {
      const carList = await InputView.readCarNames();
      const attemptCount = await InputView.readAttemptCount();

      const raceGame = new RacingGame(carList);

      OutputView.printRaceHeader();
      for (let i = 0; i < attemptCount; i++) {
        raceGame.runSingleAttempt();
        OutputView.printSingleAttemptResult(raceGame.getCarStatusList());
      }
      const raceWinner = raceGame.judgeWinner();

      OutputView.printWinners(raceWinner);
    } catch (error) {
      OutputView.printErrorMessage(error);
      throw error;
    }
  }
}

export default App;
