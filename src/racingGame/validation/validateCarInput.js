export default function validateCarInput( carInput ){
    const regexMatchSpecialCharacter = /[!@#$%^&*\(\)_+~\`;:\"\'\{\}\[\]<>.\/?\\\-=|]/g
    const regexCheckFormat = /,\s*,|^,|,$/g

    if( !carInput ) throw Error('[ERROR] 자동차 이름 입력값이 없습니다.');
    if( regexMatchSpecialCharacter.test(carInput) ) throw Error('[ERROR] 자동차 이름엔 특수문자가 포함될 수 없습니다.');
    if( regexCheckFormat.test(carInput) ) throw Error('[ERROR] 입력값의 입력 형식을 확인해주세요.');
}