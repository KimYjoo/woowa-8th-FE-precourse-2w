export default function judgeWinner(carObjectList){
    const maxProgress = getMaxCarProgress(carObjectList);
    const winnerList = getRaceWinnerList(carObjectList, maxProgress);
    const winnerString = stringizeWinnerList(winnerList);
    return winnerString;
}

function getMaxCarProgress( carObjectList ){
    const maxProgress = carObjectList.reduce((currMax, car) => {
        return Math.max(currMax, car.progress);
    }, -Infinity);
    return maxProgress;
}

function getRaceWinnerList( carObjectList, maxProgress ){
    const raceWinners = carObjectList.reduce((winner, car) => {
        if( car.progress === maxProgress ){
            winner.push(car.carName);
        }
        return winner;
    }, []);
    return raceWinners;
}

function stringizeWinnerList( winnerList ){
    return winnerList.join(', ');
}