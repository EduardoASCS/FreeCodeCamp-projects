function palindrome(str) {
  const alphanumeric = /[A-Za-z0-9]/g;
  let strAlphanumeric = str.match(alphanumeric);

  if(forward(strAlphanumeric).toLowerCase() == backward(strAlphanumeric).toLowerCase()) {
    return true;
  } else {
    return false;
  };
};

const forward = (string) => {
  let wordForward = "";

  for (let i = 0; i < string.length; i++) {
    wordForward = wordForward.concat(string[i]);
  };
  return wordForward
};

const backward = (word) => {
  let wordBackward = "";
  
  for (let j = word.length - 1; j >= 0; j--) {
    wordBackward = wordBackward.concat(word[i]);
  };
  return wordBackward;
};