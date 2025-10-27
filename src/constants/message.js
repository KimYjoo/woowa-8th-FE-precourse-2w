export const Message = Object.freeze({
    INPUT_CAR : '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    INPUT_ATTEMPT : '시도할 횟수는 몇 회인가요?\n',
    RACE_HEADER : '실행 결과',
    PREFIX_WINNER : '최종 우승자 : ',
});

export const ErrorMessage = Object.freeze({
    PREFIX: "[ERROR]",
    CAR_INPUT_NON : "자동차 이름 입력값이 없습니다.",
    CAR_INPUT_SPECIAL_CHARACTER : "자동차 이름엔 특수문자가 포함될 수 없습니다.",
    CAR_INPUT_FORM : "입력값의 입력 형식을 확인해주세요.",
    ATTEMPT_INPUT_NON : "시도 횟수를 입력하지 않음",
    ATTEMPT_INPUT_NAN : "시도 횟수 입력값이 숫자가 아닙니다.",
    ATTEMPT_INPUT_OVER_LIMIT : "입력된 시도 횟수값이 제한된 범위를 초과하였습니다. (1 ~ 5)"
});