import { Regex } from "../constants/regex.js";
import { ErrorMessage } from "../constants/message.js";
import { GameSettings } from "../constants/gameSettings.js";

export function validateCarInput(carInput) {
  if (!carInput)
    throw Error(`${ErrorMessage.PREFIX} ${ErrorMessage.CAR_INPUT_NON}`);
  if (Regex.MATCH_CAR_SPECIAL_CHARACTER.test(carInput))
    throw Error(
      `${ErrorMessage.PREFIX} ${ErrorMessage.CAR_INPUT_SPECIAL_CHARACTER}`
    );
  if (Regex.CHECK_CAR_FORMAT.test(carInput))
    throw Error(`${ErrorMessage.PREFIX} ${ErrorMessage.CAR_INPUT_FORM}`);
}

export function validateAttemptInput(attemptInput) {
  if (!attemptInput)
    throw Error(`${ErrorMessage.PREFIX} ${ErrorMessage.ATTEMPT_INPUT_NON}`);
  const numberAttempt = Number(attemptInput);
  if (!isFinite(numberAttempt))
    throw Error(`${ErrorMessage.PREFIX} ${ErrorMessage.ATTEMPT_INPUT_NAN}`);
  if (
    numberAttempt < GameSettings.MIN_ATTEMPT ||
    numberAttempt > GameSettings.MAX_ATTEMPT
  )
    throw Error(
      `${ErrorMessage.PREFIX} ${ErrorMessage.ATTEMPT_INPUT_OVER_LIMIT}`
    );
}
