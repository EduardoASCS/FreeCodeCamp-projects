// The user may fill out the form field any way they choose as long as it has the format of a valid US number.

function telephoneCheck(str) {
  const phoneNumber = /^1?\s?\d\d\d\-?\s?\d\d\d\-?\s?\d\d\d\d$ | ^1?\s?\(\d\d\d\)-?\s?\d\d\d\-?\s?\d\d\d\d$/;

  if (phoneNumber.test(str)) {
  return true;
  } else {
    return false;
  }
}
