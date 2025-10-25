export default function validateAttemptInput( attemptInput ){
    if( !attemptInput ) throw Error('[ERROR] 시도 횟수를 입력하지 않음');
    const numberAttempt = Number(attemptInput);
    if( !isFinite(numberAttempt) ) throw Error('[ERROR] 시도 횟수 입력값이 숫자가 아닙니다.');
    if( numberAttempt < 1 || numberAttempt > 5 ) throw Error('[ERROR] 입력된 시도 횟수값이 제한된 범위를 초과하였습니다. (1 ~ 5)');
}