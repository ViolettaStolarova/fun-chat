export const ValidationPatterns = {
  englishLettersAndDigitsOnly: /^[A-Za-z0-9]+$/ as RegExp,
  firstLetterIsUppercase: /^[A-Z]/ as RegExp,
} as const;

export const enum ValidInputLength {
  USER_LOGIN_MIN_LENGTH = 4,
  USER_PASSWORD_MIN_LENGTH = 8,
}

export const enum InputErrorMessages {
  ENGLISH_LETTERS_AND_DIGITS = 'Only English letters and digits',
  FIRST_LETTER_UPPERCASE = 'The first letter - uppercase',
  MIN_LENGTH = 'Minimum characters - ',
}

export const ERROR_ICON = '⚠️';

export const enum LoginErrorMessages {
  INCORRECT_PASSWORD = 'Incorrect Password, try again',
  CHOOSE_ANOTHER_USERNAME = 'Choose another Username and try again',
}
