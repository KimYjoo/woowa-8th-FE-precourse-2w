import { Regex } from "../constants/regex.js";
import { ErrorMessage } from "../constants/message.js";
import { GameSettings } from "../constants/gameSettings.js";

export function validateCarInput(carInput) {
  // 자동차 입력값이 없을 경우
  if (!carInput)
    throw Error(`${ErrorMessage.PREFIX} ${ErrorMessage.CAR_INPUT_NON}`);
  // 자동차 입력값이 너무 큰 경우
  if (carInput.length < GameSettings.MAX_INPUT)
    throw Error(`${ErrorMessage.PREFIX} ${ErrorMessage.BIG_INPUT}`);
  // 자동차 입력값에 특수 문자가 포함됐을 경우
  if (Regex.MATCH_CAR_SPECIAL_CHARACTER.test(carInput))
    throw Error(
      `${ErrorMessage.PREFIX} ${ErrorMessage.CAR_INPUT_SPECIAL_CHARACTER}`
    );
  // 자동차 입력값에 이름이 공백인 경우나 양쪽 끝에 쉼표가 포함됐을 경우
  if (Regex.CHECK_CAR_FORMAT.test(carInput))
    throw Error(`${ErrorMessage.PREFIX} ${ErrorMessage.CAR_INPUT_FORM}`);
}

export function validateAttemptInput(attemptInput) {
  // 시도 입력값이 없을 경우
  if (!attemptInput)
    throw Error(`${ErrorMessage.PREFIX} ${ErrorMessage.ATTEMPT_INPUT_NON}`);
  // 시도 입력값이 너무 큰 경우
  if (attemptInput.length < GameSettings.MAX_INPUT)
    throw Error(`${ErrorMessage.PREFIX} ${ErrorMessage.BIG_INPUT}`);

  const numberAttempt = Number(attemptInput);
  // 시도 입력값이 숫자가 아닌 경우
  if (!Number.isFinite(numberAttempt))
    throw Error(`${ErrorMessage.PREFIX} ${ErrorMessage.ATTEMPT_INPUT_NAN}`);
  // 시도 입력값이 소수인 경우
  if (!Number.isInteger(numberAttempt))
    throw Error(
      `${ErrorMessage.PREFIX} ${ErrorMessage.ATTEMPT_INPUT_ISINTEGER}`
    );
  // 시도 입력값이 정해진 범위를 넘은 경우
  if (
    numberAttempt < GameSettings.MIN_ATTEMPT ||
    numberAttempt > GameSettings.MAX_ATTEMPT
  )
    throw Error(
      `${ErrorMessage.PREFIX} ${ErrorMessage.ATTEMPT_INPUT_OVER_LIMIT}`
    );
}
