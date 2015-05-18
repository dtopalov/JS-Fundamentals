// Problem 1:

function problem1() {
    var a = document.getElementById('first-number').value,
        b = document.getElementById('second-number').value,
        temp;

    if (!isNaN(a) && !isNaN(b) && a !== '' && b !== '') {
        if (a > b) {
            temp = a;
            a = b;
            b = temp;
        }
        document.getElementById('pr1answer').innerHTML = 
        a + ' ' + b;    
        console.log('Problem 1: ' + a + ' ' + b);
    } else {
        document.getElementById('pr1answer').innerHTML = 
        'Incorrect input. Enter two numbers.';
    }

    document.getElementById('first-number').value = '';
    document.getElementById('second-number').value = '';
}

// Problem 2:

function problem2() {
    var a = document.getElementById('first-number2').value,
        b = document.getElementById('second-number2').value,
        c = document.getElementById('third-number2').value,
        negativeCount = 0,
        arr = [a, b, c],
        result;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && 
        a !== '' && b !== '' && c !== '') {
        for (var i = 0; i < arr.length; i+=1) {
            if (arr[i] < 0) {
                negativeCount += 1;
            };
        };

        if (a*1 === 0 || b*1 === 0 || c*1 === 0) {
            result = 0;
        }
        else if (negativeCount % 2 === 0) {
            result = '+';
        }
        else {
            result = '-';
        };
        
        document.getElementById('pr2answer').innerHTML = 
        'Product is: ' + result;
        console.log('Problem 2: Product is ' + result);

    } else {
        document.getElementById('pr2answer').innerHTML = 
        'Incorrect input. Enter three numbers.';
    }

    document.getElementById('first-number2').value = '';
    document.getElementById('second-number2').value = '';
    document.getElementById('third-number2').value = '';
}

// Problem 3:

function problem3() {
    var a = document.getElementById('first-number3').value,
        b = document.getElementById('second-number3').value,
        c = document.getElementById('third-number3').value,
        greatest = 'The greatest number ';
        
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && 
        a !== '' && b !== '' && c !== '') {
        a *= 1; //converting input type from string to number
        b *= 1;
        c *= 1;

        if ((a === b && b === c) || (a === b && a > c) || (a === c && a > b) || (b === c && b > a)) {
            greatest = greatest + 'cannot be determined';
        }
        if (a > b && a > c) {
            greatest += 'is ' + a;
        }
        if (b > a && b > c) {
            greatest += 'is ' + b;
        }
        if (c > a && c > b) {
            greatest += 'is ' + c;
        }
        
        document.getElementById('pr3answer').innerHTML = 
        greatest;
        console.log('Problem 3: ' + greatest);

    } else {
        document.getElementById('pr3answer').innerHTML = 
        'Incorrect input. Enter three numbers.';
    }

    document.getElementById('first-number3').value = '';
    document.getElementById('second-number3').value = '';
    document.getElementById('third-number3').value = '';
}

// Problem 4:

function problem4() {
    var a = document.getElementById('first-number4').value,
        b = document.getElementById('second-number4').value,
        c = document.getElementById('third-number4').value,
        sorted;
        
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && 
        a !== '' && b !== '' && c !== '') {
        a *= 1; //converting input type from string to number
        b *= 1;
        c *= 1;

        if (a >= b) {
            if (b >= c) {
                sorted = a + ' ' + b + ' ' + c; 
            } else {
                if (c > a) {
                    sorted = c + ' ' + a + ' ' + b;
                } else {
                    sorted = a + ' ' + c + ' ' + b;
                };
            };
        } else {
            if (b >= c) {
                if (a >= c) {
                    sorted = b + ' ' + a + ' ' + c;
                } else {
                    sorted = b + ' ' + c + ' ' + a;
                };
            } else {
                sorted = c + ' ' + b + ' ' + a;
            };
        };
        
        document.getElementById('pr4answer').innerHTML = 
        sorted;
        console.log('Problem 4: ' + sorted);

    } else {
        document.getElementById('pr4answer').innerHTML = 
        'Incorrect input. Enter three numbers.';
    }

    document.getElementById('first-number4').value = '';
    document.getElementById('second-number4').value = '';
    document.getElementById('third-number4').value = '';
}

// Problem 5:

function problem5() {
    var number = document.getElementById('first-number5').value,
        result = 'not a digit';
    
    switch(number) {
        case '0': result = "Zero"; break;
        case '1': result = "One"; break;
        case '2': result = "Two"; break;
        case '3': result = "Three"; break;
        case '4': result = "Four"; break;
        case '5': result = "Five"; break;
        case '6': result = "Six"; break;
        case '7': result = "Seven"; break;
        case '8': result = "Eight"; break;
        case '9': result = "Nine"; break;
     }

    document.getElementById('pr5answer').innerHTML = 
        result;
    console.log('Problem 5: ' + result);
    
    document.getElementById('first-number5').value = '';
}

// Problem 6:

function problem6() {
    var a = document.getElementById('first-number6').value,
        b = document.getElementById('second-number6').value,
        c = document.getElementById('third-number6').value,
        D,
        xOnlyRoot,
        xRoot1,
        xRoot2,
        result;
        
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && 
        a !== '' && b !== '' && c !== '' && a*1 !== 0) {
        a *= 1; //converting input type from string to number
        b *= 1;
        c *= 1;

        D = b * b - 4 * a * c;
        xOnlyRoot = -b / (2 * a);
        xRoot1 = (-b - Math.sqrt(D)) / (2 * a);
        xRoot2 = (-b + Math.sqrt(D)) / (2 * a);

        if (D < 0) {
            result = a + "x^2 + " + b + "x + " + c + " has no real roots.";
        }
        else {
            if (D === 0) {
                result = a + "x^2 + " + b + "x + " + c + " has one real root x=" + xOnlyRoot;
            }
            else {
                result = a + "x^2 + " + b + "x + " + c + " has two real roots x1=" + xRoot1 + " and x2=" + xRoot2;
            }
        }
        
        document.getElementById('pr6answer').innerHTML = 
        result;
        console.log('Problem 6: ' + result);

    } else {
        document.getElementById('pr6answer').innerHTML = 
        'Incorrect input. Enter three numbers (a != 0)';
    }

    document.getElementById('first-number6').value = '';
    document.getElementById('second-number6').value = '';
    document.getElementById('third-number6').value = '';
}

// Problem 7:

function problem7() {
    var a = document.getElementById('first-number7').value,
        b = document.getElementById('second-number7').value,
        c = document.getElementById('third-number7').value,
        d = document.getElementById('fourth-number7').value,
        e = document.getElementById('fifth-number7').value,
        currentMax;
        
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) &&
        a !== '' && b !== '' && c !== '' && d !== '' && e !== '') {
        a *= 1; //converting input type from string to number
        b *= 1;
        c *= 1;
        d *= 1;
        e *= 1;
        currentMax = a;

        if (b > currentMax) {
            currentMax = b;
        };

        if (c > currentMax) {
            currentMax = c;
        };

        if (d > currentMax) {
            currentMax = d;
        };

        if (e > currentMax) {
            currentMax = e;
        };
                
        document.getElementById('pr7answer').innerHTML = 
        'The largest number is ' + currentMax;
        console.log('Problem 7: The largest number is ' + currentMax);

    } else {
        document.getElementById('pr7answer').innerHTML = 
        'Incorrect input. Enter five numbers.';
    }

    document.getElementById('first-number7').value = '';
    document.getElementById('second-number7').value = '';
    document.getElementById('third-number7').value = '';
    document.getElementById('fourth-number7').value = '';
    document.getElementById('fifth-number7').value = '';
}

// Problem 8:

function problem8() {
    var number = document.getElementById('first-number8').value,
        result ;

    if (!isNaN(number) && number !== '' && 
        number*1 >= 0 && number*1 <=999 &&
        ((number*1) % 1 === 0)) {
        number *= 1;
        var hundreds = Math.floor(number / 100),
            tens = (Math.floor(number / 10)) % 10,
            digits = (number % 10),
            special = 10 + digits;

        switch (special) {
            case 11: special = "eleven"; break;
            case 12: special = "twelve"; break;
            case 13: special = "thirteen"; break;
            case 14: special = "fourteen"; break;
            case 15: special = "fifteen"; break;
            case 16: special = "sixteen"; break;
            case 17: special = "seventeen"; break;
            case 18: special = "eighteen"; break;
            case 19: special = "nineteen"; break;
        }

        switch (hundreds) {
            case 1: hundreds = "one hundred "; break;
            case 2: hundreds = "two hundred "; break;
            case 3: hundreds = "three hundred "; break;
            case 4: hundreds = "four hundred "; break;
            case 5: hundreds = "five hundred "; break;
            case 6: hundreds = "six hundred "; break;
            case 7: hundreds = "seven hundred "; break;
            case 8: hundreds = "eight hundred "; break;
            case 9: hundreds = "nine hundred "; break;
            case 0: hundreds = ""; break;
        }
        if (number % 100 != 0 && number >= 100) {
            hundreds = hundreds + 'and ';
        }
        if (tens == 1 && digits > 0) {
            result = hundreds + special;
            hundreds = tens = digits = "";
            document.getElementById('pr8answer').innerHTML = 
            result;
            console.log('Problem 8: ' + result);
            document.getElementById('first-number8').value = '';
            return;
        }

        switch (tens) {
            case 1: tens = "ten"; break;
            case 2: tens = "twenty "; break;
            case 3: tens = "thirty "; break;
            case 4: tens = "fourty "; break;
            case 5: tens = "fifty "; break;
            case 6: tens = "sixty "; break;
            case 7: tens = "seventy "; break;
            case 8: tens = "eighty "; break;
            case 9: tens = "ninety "; break;
            case 0: tens = ""; break;
        }

        switch (digits) {
            case 1: digits = "one"; break;
            case 2: digits = "two"; break;
            case 3: digits = "three"; break;
            case 4: digits = "four"; break;
            case 5: digits = "five"; break;
            case 6: digits = "six"; break;
            case 7: digits = "seven"; break;
            case 8: digits = "eight"; break;
            case 9: digits = "nine"; break;
            default: digits = ""; break;
        }

        if (number === 0) {
            result = "Zero";
            hundreds = tens = digits = "";
            document.getElementById('pr8answer').innerHTML = 
            result;
            console.log('Problem 8: ' + result);
            document.getElementById('first-number8').value = '';
            return;
        }

        result = hundreds + tens + digits;
        document.getElementById('pr8answer').innerHTML = 
        result;
        console.log('Problem 8: ' + result);
        document.getElementById('first-number8').value = '';
        return;
    } else {
        document.getElementById('pr8answer').innerHTML = 
            'Enter an integer in the interval [0, 999]';
        document.getElementById('first-number8').value = '';
    }
}