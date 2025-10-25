import { Console } from '@woowacourse/mission-utils'
import inputCarProcess from './racingGame/inputProcessing/inputCarProcess.js';
import inputAttemptProcess from './racingGame/inputProcessing/inputAttemptProcess.js';
import validateCarInput from './racingGame/validation/validateCarInput.js';
import validateAttemptInput from './racingGame/validation/validateAttemptInput.js';
class App {
  async run() {
    try{
      const inputCarString = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      validateCarInput(inputCarString);
      const inputAttempt = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      validateAttemptInput(inputAttempt);
      
      const carObjects = inputCarProcess(inputCarString);
      const attemptNumber = inputAttemptProcess(inputAttempt);
    }
    catch(e){
      Console.print(e.message)
      throw(e)
    }
    
  }
}

export default App;
