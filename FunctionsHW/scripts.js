// Problem 1:

function problem1() {
    var input = document.getElementById('number1').value;
    if (input !== '' && !isNaN(input) && input % 1 === 0) {
        var result;

        switch (input[input.length - 1]) {
            case '0':
                result = 'Zero';
                break;
            case '1':
                result = 'One';
                break;
            case '2':
                result = 'Two';
                break;
            case '3':
                result = 'Three';
                break;
            case '4':
                result = 'Four';
                break;
            case '5':
                result = 'Five';
                break;
            case '6':
                result = 'Six';
                break;
            case '7':
                result = 'Seven';
                break;
            case '8':
                result = 'Eight';
                break;
            case '9':
                result = 'Nine';
                break;
        }

        document.getElementById('pr1answer').innerHTML =
            result;
        console.log('Problem 1: ' + result);
    } else {
        document.getElementById('pr1answer').innerHTML =
            'Invalid input. Enter an integer.';
    }
    document.getElementById('number1').value = '';
}

// Problem 2:

function problem2() {
    var input = document.getElementById('number2').value,
        result = '',
        i;
    if (input !== '' && !isNaN(input)) {
        if (input < 0) {
            input = (-input).toString();
            result += '-';
        }
        for (i = input.length - 1; i >= 0; i -= 1) {
            result += input[i];
        }

        document.getElementById('pr2answer').innerHTML =
            result;
        console.log('Problem 2: ' + result);
    } else {
        document.getElementById('pr2answer').innerHTML =
            'Invalid input. Enter a number.';
    }
    document.getElementById('number2').value = '';
}

// Problem 3:

function problem3() {
    var check = document.getElementById('check').checked,
        search = document.getElementById('word').value;
    document.getElementById('notice').style.display = 'none';
    if (search !== '') {
        if (check) {
            searchWord(document.getElementById('text').innerHTML, search, true);
        } else {
            searchWord(document.getElementById('text').innerHTML, search);
        }
    } else {
        document.getElementById('notice').style.display = 'block';
        document.getElementById('notice').innerHTML = '<p>Please enter a word to search for</p>';
    }

    document.getElementById('check').checked = false;
    document.getElementById('word').value = '';
}

function searchWord(text, search, caseSensitive) {
    var lookFor,
        clearText,
        newText;

    if (!caseSensitive) {
        lookFor = new RegExp('(\\b' + search + '\\b)', 'gim');
    } else {
        lookFor = new RegExp('(\\b' + search + '\\b)', 'gm');
    }
    clearText = text.replace(/(<span>|<\/span>)/gim, '');
    newText = clearText.replace(lookFor, '<span>$1</span>');
    document.getElementById('text').innerHTML = newText;
    document.getElementById('notice').style.display = 'none';

    if (clearText === newText) {
        document.getElementById('notice').style.display = 'block';
        document.getElementById('notice').innerHTML = '<p>' + search + ' not found</p>';
    }
}

// Problem 4:

function divCount() {
    var count = document.getElementsByTagName('div').length;
    document.getElementById('count').innerHTML = 'There are ' + count + ' DIVs in this HTML.';
    console.log('Problem 4: There are ' + count + ' DIVs.');
}

function addDiv() {
    var newDivsContent = document.getElementById('newDivs').innerHTML,
        updatedNewDiv = document.getElementById('newDivs').innerHTML +=
        '<div class="newDiv">New Div</div>';
    document.getElementById('newDivs').innerHTML = updatedNewDiv;
    document.getElementById('newDivs').style.display = 'block';
    divCount();
}

function resetDiv() {
    var newDivsContent = document.getElementById('newDivs').innerHTML,
        updatedNewDiv = document.getElementById('newDivs').innerHTML = '';
    document.getElementById('count').innerHTML = '';
    document.getElementById('newDivs').style.display = 'none';
    divCount();
}

divCount();

// Problem 5:

function problem5() {
    var input = document.getElementById('array1').value,
        validInput = validateInput(input),
        arr,
        i,
        result,
        number = document.getElementById('number5').value;
    if (validInput && number !== '' && !isNaN(number)) {
        arr = input.split(', ').map(Number);
        number *= 1;
        result = count(number, arr);
        document.getElementById('pr5answer').innerHTML = number + ' is found ' +
            result + ' times in ' + arr;
        console.log('Problem 5: ' + number + ' is found ' + result + ' times in ' + arr);
    } else {
        document.getElementById('pr5answer').innerHTML = 'Invalid input';
    }
    document.getElementById('array1').value = '';
    document.getElementById('number5').value = '';
}

function count(number, array) {
    var counter = 0;
    for (var i in array) {
        if (array[i] == number) {
            counter++;
        }
    }
    return counter;
}

function test() {
    var arrTest = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
    var test1 = count(1, arrTest),
        test2 = count(2, arrTest),
        test3 = count(3, arrTest),
        test4 = count(4, arrTest),
        test5 = count(5, arrTest),
        test1ExpectedResult = 1,
        test2ExpectedResult = 2,
        test3ExpectedResult = 3,
        test4ExpectedResult = 4,
        test5ExpectedResult = 5;

    document.getElementById('pr5test').innerHTML =
        '5 tests were run for the function count(number, array).<br />For the test array [ ' +
        arrTest.join(' | ') +
        ' ]<br />count(1, arrTest) = ' + test1 + ' --> ' + (test1 === test1ExpectedResult) +
        ';<br />count(2, arrTest) = ' + test2 + ' --> ' + (test2 === test2ExpectedResult) +
        ';<br />count(3, arrTest) = ' + test3 + ' --> ' + (test3 === test3ExpectedResult) +
        ';<br />count(4, arrTest) = ' + test4 + ' --> ' + (test4 === test4ExpectedResult) +
        ';<br />count(5, arrTest) = ' + test5 + ' --> ' + (test5 === test5ExpectedResult) + ';';
}

test();

// Problem 6:

function problem6() {
    var input = document.getElementById('array2').value,
        validInput = validateInput(input),
        arr,
        i,
        result,
        number = document.getElementById('number6').value;
    if (validInput && number !== '' && !isNaN(number) && (number % 1 === 0)) {
        arr = input.split(', ').map(Number);
        number *= 1;
        if (number >= 0 && number < arr.length) {
            if (number > 0 && number < arr.length - 1) {
                result = checkLargerThanNeighbours(arr, number);
            } else {
                result = 'This element has only 1 neighbour';
            }
        } else {
            result = 'Index must be >= 0 and < ' + arr.length;
        }
        document.getElementById('pr6answer').innerHTML = 'Number at index ' + number + ' is bigger than it\'s neighbours? --> ' + result;
        console.log('Problem 6: Number at index ' + number + ' is bigger than it\'s neighbours? --> ' + result);
    } else {
        document.getElementById('pr6answer').innerHTML = 'Invalid input';
    }
    document.getElementById('array2').value = '';
    document.getElementById('number6').value = '';
}

function checkLargerThanNeighbours(array, number) {
    if (array[number] > array[number - 1] && array[number] > array[number + 1]) {
        return true;
    }
    return false;
}

// Problem 7:

function problem7() {
    var input = document.getElementById('array3').value,
        validInput = validateInput(input),
        arr,
        i,
        len,
        result = -1;
    if (validInput) {
        arr = input.split(', ').map(Number);
        for (i = 0, len = arr.length; i < len; i += 1) {
            if (checkLargerThanNeighbours(arr, i)) {
                result = i;
                break;
            }
        }
        document.getElementById('pr7answer').innerHTML = 'Index of first element bigger than' +
            'it\'s neighbours (-1 if none): ' + result;
        console.log('Problem 7: Index of first element bigger than' +
            'it\'s neighbours (-1 if none): ' + result);
    } else {
        document.getElementById('pr7answer').innerHTML = 'Invalid input';
    }
    document.getElementById('array3').value = '';
}

function validateInput(input) {
    var validInput = true,
        arr;
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
    return validInput;
}
