// Problem 1:

function problem1() {
    var arr = [],
        i;

    for (i = 0; i < 20; i += 1) {
        arr[i] = i * 5;
    }

    document.getElementById('pr1answer').innerHTML = arr.join(', ');
    console.log('Problem 1: ' + arr.join(', '));
}

// Problem 2:

function problem2() {
    var string1 = document.getElementById('string1').value,
        string2 = document.getElementById('string2').value,
        string1len,
        string2len,
        i,
        result = '';

    if (string1 !== '' && string2 !== '') {
        string1len = string1.length;
        string2len = string2.length;

        for (i = 0; i < Math.min(string1len, string2len); i += 1) {
            if (string1[i] < string2[i]) {
                result = string1 + ' < (comes before) ' + string2;
                break;
            }
            if (string1[i] > string2[i]) {
                result = string2 + ' < (comes before) ' + string1;
                break;
            }
        }

        if (result === '') {
            if (string1len < string2len) {
                result = string1 + ' < (comes before) ' + string2;
            } else if (string1len > string2len) {
                result = string2 + ' < (comes before) ' + string1;
            } else {
                result = string1 + ' = ' + string2;
            }
        }

        document.getElementById('pr2answer').innerHTML = result;
        console.log('Problem 2: ' + result);

    } else {
        document.getElementById('pr2answer').innerHTML =
            'Please enter two strings';
    }

    document.getElementById('string1').value = '';
    document.getElementById('string2').value = '';
}

// Problem 3:

function problem3() {
    var input = document.getElementById('array3').value,
        validInput = true,
        max = 1,
        currentMax = 1,
        maxEndIndex = 0,
        arr,
        i,
        len,
        maxSequence;

    if (input === '') {
        validInput = false;
    } else {
        arr = input.split(', ').map(Number);
        for (i = 0, len = arr.length; i < len; i += 1) {
            if (isNaN(arr[i])) {
                validInput = false;
                break;
            }
        }
    }

    if (validInput) {
        for (i = 1, len = arr.length; i < len; i += 1) {
            if (arr[i] === arr[i - 1]) {
                currentMax += 1;
                if (currentMax > max) {
                    max = currentMax;
                    maxEndIndex = i;
                }
            } else {
                currentMax = 1;
            }
        }
        maxSequence = arr.splice(maxEndIndex - max + 1, max).join(', ');
        document.getElementById('pr3answer').innerHTML =
            'Maximal sequence of equal elements: ' + maxSequence;
        console.log('Problem 3: Maximal sequence of equal elements: ' +
            maxSequence);
    } else {
        document.getElementById('pr3answer').innerHTML = 'Invalid input';
    }
    document.getElementById('array3').value = '';
}

// Problem 4:

function problem4() {
    var input = document.getElementById('array4').value,
        validInput = true,
        max = 1,
        currentMax = 1,
        maxEndIndex = 0,
        arr,
        i,
        len,
        maxSequence;

    if (input === '') {
        validInput = false;
    } else {
        arr = input.split(', ').map(Number);
        for (i = 0, len = arr.length; i < len; i += 1) {
            if (isNaN(arr[i])) {
                validInput = false;
                break;
            }
        }
    }

    if (validInput) {
        for (i = 1, len = arr.length; i < len; i += 1) {
            if (arr[i] > arr[i - 1]) {
                currentMax += 1;
                if (currentMax > max) {
                    max = currentMax;
                    maxEndIndex = i;
                }
            } else {
                currentMax = 1;
            }
        }
        maxSequence = arr.splice(maxEndIndex - max + 1, max).join(', ');
        document.getElementById('pr4answer').innerHTML =
            'Maximal sequence of equal elements: ' + maxSequence;
        console.log('Problem 4: Maximal sequence of equal elements: ' +
            maxSequence);
    } else {
        document.getElementById('pr4answer').innerHTML = 'Invalid input';
    }
    document.getElementById('array4').value = '';
}

// Problem 5:

function problem5() {
    var input = document.getElementById('array5').value,
        validInput = true,
        temp,
        arr,
        i,
        j,
        min,
        len,
        result;

    if (input === '') {
        validInput = false;
    } else {
        arr = input.split(', ').map(Number);
        for (i = 0, len = arr.length; i < len; i += 1) {
            if (isNaN(arr[i])) {
                validInput = false;
                break;
            }
        }
    }

    if (validInput) {
        result = 'Initial array: ' + arr.join(', ');

        for (i = 0, len = arr.length; i < len; i += 1) {
            for (j = i + 1; j < len; j += 1) {
                if (arr[i] > arr[j]) {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
            }
        }

        result += '; sorted array: ' + arr.join(', ');
        document.getElementById('pr5answer').innerHTML = result;
        console.log('Problem 5: ' + result);

    } else {
        document.getElementById('pr5answer').innerHTML = 'Invalid input';
    }
    document.getElementById('array5').value = '';
}

// Problem 6:

function problem6() {
    var input = document.getElementById('array6').value,
        validInput = true,
        mostFrequent,
        current,
        mostFrequentCount = 0,
        currentCount = 0,
        arr,
        i,
        j,
        len,
        result;

    if (input === '') {
        validInput = false;
    } else {
        arr = input.split(', ').map(Number);
        for (i = 0, len = arr.length; i < len; i += 1) {
            if (isNaN(arr[i])) {
                validInput = false;
                break;
            }
        }
    }
    if (validInput) {

        for (i = 0, len = arr.length; i < len; i += 1) {
            current = arr[i];
            currentCount = 0;
            for (j = i; j < len; j += 1) {
                if (arr[j] === current) {
                    currentCount += 1;
                    if (currentCount > mostFrequentCount) {
                        mostFrequentCount = currentCount;
                        mostFrequent = current;
                    }
                }
            }
        }

        result = 'The most frequent number is ' + mostFrequent +
            '(' + mostFrequentCount + ' times)';
        document.getElementById('pr6answer').innerHTML = result;
        console.log('Problem 6: ' + result);

    } else {
        document.getElementById('pr6answer').innerHTML = 'Invalid input';
    }
    document.getElementById('array6').value = '';
}

// Problem 7:

function problem7() {
    var input = document.getElementById('array7').value,
        number = document.getElementById('number7').value,
        validInput = true,
        arr,
        i,
        indexOf,
        num,
        len,
        result;

    if (input === '') {
        validInput = false;
    } else {
        arr = input.split(', ').map(Number);
        for (i = 0, len = arr.length; i < len; i += 1) {
            if (isNaN(arr[i])) {
                validInput = false;
                break;
            }
        }
    }

    if (validInput && number !== '' && !isNaN(number)) {
        arr.sort(function(a, b) {
            return a - b;
        });
        number *= 1;
        indexOf = binSearch(arr, number, (arr.length / 2) | 0);
        result = 'The index of ' + number + ' is (-1 if not found): ' +
            indexOf;
        document.getElementById('pr7answer').innerHTML = result;
        console.log('Problem 7: ' + result);
    } else {
        document.getElementById('pr7answer').innerHTML = 'Invalid input';
    }
    document.getElementById('array7').value = '';

    function binSearch(array, number, index) {
    	var arrNext;
        if (array[0] > number || number > array[array.length - 1] ||
            (array.length === 1 && array[0] !== number)) {
            return (-1);
        }
        var middle = (array.length / 2) | 0;

        if (array[middle] === number) {
            return index;
        } else {
            if (array[middle] > number) {
                arrNext = array.slice(0, middle);
                index -= Math.ceil(arrNext.length / 2);
                return binSearch(arrNext, number, index);
            } else {
                arrNext = array.slice(middle, array.length);
                index += (arrNext.length / 2) | 0;
                return binSearch(arrNext, number, index);
            }
        }
    }
}
