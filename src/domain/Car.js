import { Console, MissionUtils } from "@woowacourse/mission-utils"

export default class Car {
    constructor({carName}) {
        this.carName = carName;
        this.progress = 0;
    }
    move(){
        if(MissionUtils.Random.pickNumberInRange(0, 9) >= 4) this.progress += 1;
    }
    getCarProgress(){
        return { carName:this.carName, progress:this.progress };
    }
}
