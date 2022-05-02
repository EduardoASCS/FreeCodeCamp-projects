//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  const onlyLetters = str.match(/[[A-Za-z0-9]/g);

  const string = onlyLetters
    .join('')
    .toLowerCase();

  const stringReversed = onlyLetters
    .reverse()
    .join('')
    .toLowerCase();

  if (string === stringReversed) {
    return true
  } else {
    return false
  }
}
