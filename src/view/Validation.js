export function validateCarInput( carInput ){
    const regexMatchSpecialCharacter = /[!@#$%^&*\(\)_+~\`;:\"\'\{\}\[\]<>.\/?\\\-=|]/g
    const regexCheckFormat = /,\s*,|^,|,$/g

    if( !carInput ) throw Error('[ERROR] 자동차 이름 입력값이 없습니다.');
    if( regexMatchSpecialCharacter.test(carInput) ) throw Error('[ERROR] 자동차 이름엔 특수문자가 포함될 수 없습니다.');
    if( regexCheckFormat.test(carInput) ) throw Error('[ERROR] 입력값의 입력 형식을 확인해주세요.');
}

export function validateAttemptInput( attemptInput ){
    if( !attemptInput ) throw Error('[ERROR] 시도 횟수를 입력하지 않음');
    const numberAttempt = Number(attemptInput);
    if( !isFinite(numberAttempt) ) throw Error('[ERROR] 시도 횟수 입력값이 숫자가 아닙니다.');
    if( numberAttempt < 1 || numberAttempt > 5 ) throw Error('[ERROR] 입력된 시도 횟수값이 제한된 범위를 초과하였습니다. (1 ~ 5)');
}
