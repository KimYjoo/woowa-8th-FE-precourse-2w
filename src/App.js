import { Console } from '@woowacourse/mission-utils'
import inputCarProcess from './domain/inputProcessing/inputCarProcess.js';
import inputAttemptProcess from './domain/inputProcessing/inputAttemptProcess.js';
import judgeWinner from './domain/gameProgress/judgeWinner.js';
import raceStart from './domain/gameProgress/raceStart.js';
import * as InputView from './view/InputView.js';
import * as OutputView from './view/OutputView.js';
import RacingGame from './domain/RacingGame.js';

class App {
  async run() {
    try{
      const inputCarString = await InputView.readCarNames();
      const inputAttempt = await InputView.readAttemptCount();
      
      const attemptNumber = inputAttemptProcess(inputAttempt);

      Console.print('실행 결과');
      const raceGame = new RacingGame(inputCarString);
      for(let i = 0; i < attemptNumber; i++){
        raceGame.runSingleAttempt();
        OutputView.printSingleAttemptResult(raceGame.getAttemptResult());
      }
      const raceWinner = raceGame.judgeWinner();
      OutputView.printWinners(raceWinner);
    }
    catch(error){
      Console.print(error.message)
      throw(error)
    }
    
  }
}

export default App;
