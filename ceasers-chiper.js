function rot13(str) {
    
    let array = str.split("");
    let numbers = [];

    let numbersPlus13 = [];
    let finalString = "";

    let numeric = /\d/

    for (let i = 0; i < array.length; i++){
        let alphanumeric = /\w/
        if(alphanumeric.test(array[i])){
            switch(array[i]) {
                case 'A':
                    numbers.push(1)
                    break;
                case 'B':
                    numbers.push(2)
                    break;
                case 'C':
                    numbers.push(3)
                    break;
                case 'D':
                    numbers.push(4)
                    break;
                case 'E':
                    numbers.push(5)
                    break;
                case 'F':
                    numbers.push(6)
                    break;
                case 'G':
                    numbers.push(7)
                    break;
                case 'H':
                    numbers.push(8)
                    break;
                case 'I':
                    numbers.push(9)
                    break;
                case 'J':
                    numbers.push(10)
                    break;
                case 'K':
                    numbers.push(11)
                    break;
                case 'L':
                    numbers.push(12)
                    break;
                case 'M':
                    numbers.push(13)
                    break;
                case 'N':
                    numbers.push(14)
                    break;
                case 'O':
                    numbers.push(15)
                    break;
                case 'P':
                    numbers.push(16)
                    break;
                case 'Q':
                    numbers.push(17)
                    break;
                case 'R':
                    numbers.push(18)
                    break;
                case 'S':
                    numbers.push(19)
                    break;
                case 'T':
                    numbers.push(20)
                    break;
                case 'U':
                    numbers.push(21)
                    break;
                case 'V':
                    numbers.push(22)
                    break;
                case 'W':
                    numbers.push(23)
                    break;
                case 'X':
                    numbers.push(24)
                    break;
                case 'Y':
                    numbers.push(25)
                    break;
                case 'Z':
                    numbers.push(26)
                    break;
                }
        } else {
            numbers.push(array[i])
        }
    }

    for (let j = 0; j < numbers.length; j++) {
        if (numeric.test(numbers[j])) {
            numbersPlus13.push(numbers[j] + 13);
        } else {
            numbersPlus13.push(numbers[j])
        }
    }

    for (let k = 0; k < numbersPlus13.length; k++) {
        if (numeric.test(numbersPlus13[k])) {
            if (numbersPlus13[k] > 26) {
                switch(numbersPlus13[k] - 26) {
                    case 1:
                        finalString+='A';
                        break;
                    case 2:
                        finalString+='B';
                        break;
                    case 3:
                        finalString+='C';
                        break;
                    case 4:
                        finalString+='D';
                        break;
                    case 5:
                        finalString+='E';
                        break;
                    case 6:
                        finalString+='F';
                        break;
                    case 7:
                        finalString+='G';
                        break;
                    case 8:
                        finalString+='H';
                        break;
                    case 9:
                        finalString+='I';
                        break;
                    case 10:
                        finalString+='J';
                        break;
                    case 11:
                        finalString+='K';
                        break;
                    case 12:
                        finalString+='L';
                        break;
                    case 13:
                        finalString+='M';
                        break;
                    case 14:
                        finalString+='N';
                        break;
                    case 15:
                        finalString+='O';
                        break;
                    case 16:
                        finalString+='P';
                        break;
                    case 17:
                        finalString+='Q';
                        break;
                    case 18:
                        finalString+='R';
                        break;
                    case 19:
                        finalString+='S';
                        break;
                    case 20:
                        finalString+='T';
                        break;
                    case 21:
                        finalString+='U';
                        break;
                    case 22:
                        finalString+='V';
                        break;
                    case 23:
                        finalString+='W';
                        break;
                    case 24:
                        finalString+='X';
                        break;
                    case 25:
                        finalString+='Y';
                        break;
                    case 26:
                        finalString+='Z';
                        break;
                }
            } else {
                switch(numbersPlus13[k]) {
                    case 1:
                        finalString+='A';
                        break;
                    case 2:
                        finalString+='B';
                        break;
                    case 3:
                        finalString+='C';
                        break;
                    case 4:
                        finalString+='D';
                        break;
                    case 5:
                        finalString+='E';
                        break;
                    case 6:
                        finalString+='F';
                        break;
                    case 7:
                        finalString+='G';
                        break;
                    case 8:
                        finalString+='H';
                        break;
                    case 9:
                        finalString+='I';
                        break;
                    case 10:
                        finalString+='J';
                        break;
                    case 11:
                        finalString+='K';
                        break;
                    case 12:
                        finalString+='L';
                        break;
                    case 13:
                        finalString+='M';
                        break;
                    case 14:
                        finalString+='N';
                        break;
                    case 15:
                        finalString+='O';
                        break;
                    case 16:
                        finalString+='P';
                        break;
                    case 17:
                        finalString+='Q';
                        break;
                    case 18:
                        finalString+='R';
                        break;
                    case 19:
                        finalString+='S';
                        break;
                    case 20:
                        finalString+='T';
                        break;
                    case 21:
                        finalString+='U';
                        break;
                    case 22:
                        finalString+='V';
                        break;
                    case 23:
                        finalString+='W';
                        break;
                    case 24:
                        finalString+='X';
                        break;
                    case 25:
                        finalString+='Y';
                        break;
                    case 26:
                        finalString+='Z';
                        break;
                }
            }

        } else {
            finalString += numbersPlus13[k];
        }
    }
    return finalString;
  }