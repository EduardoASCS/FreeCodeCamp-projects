function convertToRoman(num) {
    let string = num.toString()
    let result = ''


    if (string.length > 3) {
    let milhar = '';
    for (let i = 0 ; i < string.length - 3; i++) {
        milhar += string[i];               
    }

    for (let i = parseInt(milhar); i > 0; i--)
        result +='M';
        }

    if (string.length > 2) {
        switch(string[string.length - 3]) {
            case '1':
                result +='C';
                break;
            case '2':
                result +='CC';
                break;
            case '3':
                result +='CCC';
                break;
            case '4':
                result +='CD';
                break;
            case '5':
                result +='D';
                break;
            case '6':
                result +='DC';
                break;
            case '7':
                result +='DCC';
                break;
            case '8':
                result +='DCCC';
                break;
            case '9':
                result +='CM';
                break;
        }
    }        

    if (string.length > 1) {
        switch(string[string.length - 2]) {
            case '1':
                result +='X';
                break;
            case '2':
                result +='XX';
                break;
            case '3':
                result +='XXX';
                break;
            case '4':
                result +='XL';
                break;
            case '5':
                result +='L';
                break;
            case '6':
                result +='LX';
                break;
            case '7':
                result +='LXX';
                break;
            case '8':
                result +='LXXX';
                break;
            case '9':
                result +='XC';
                break;
        }
    }    

    switch(string[string.length - 1]) {
        case '1':
          result +='I';
          break;
        case '2':
          result +='II';
          break;
        case '3':
            result +='III';
            break;
        case '4':
            result +='IV';
            break;
        case '5':
            result +='V';
            break;
        case '6':
            result +='VI';
            break;
        case '7':
            result +='VII';
            break;
        case '8':
            result +='VIII';
            break;
        case '9':
            result +='IX';
            break;
    }

    return result;
}
    
    console.log(convertToRoman(4));