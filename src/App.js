import { Console } from '@woowacourse/mission-utils'
import inputCarProcess from './domain/inputProcessing/inputCarProcess.js';
import inputAttemptProcess from './domain/inputProcessing/inputAttemptProcess.js';
import judgeWinner from './domain/gameProgress/judgeWinner.js';
import raceStart from './domain/gameProgress/raceStart.js';
import * as InputView from './view/InputView.js';
import * as OutputView from './view/OutputView.js';

class App {
  async run() {
    try{
      const inputCarString = await InputView.readCarNames();
      const inputAttempt = await InputView.readAttemptCount();
      
      const carObjectList = inputCarProcess(inputCarString);
      const attemptNumber = inputAttemptProcess(inputAttempt);

      Console.print('실행 결과');
      raceStart({attemptNumber, carObjectList});
      const winnerString = judgeWinner(carObjectList);

      OutputView.printWinners(winnerString);
    }
    catch(error){
      Console.print(error.message)
      throw(error)
    }
    
  }
}

export default App;
