// Problem 1:

function problem1() {
    var input = document.getElementById('string1').value;
    if (input) {
        document.getElementById('pr1answer').innerHTML = reverseString(input);
        console.log('Problem 1: ' + reverseString(input));
    } else {
        document.getElementById('pr1answer').innerHTML = 'String is empty';
    }
    document.getElementById('string1').value = '';
}

function reverseString(string) {
    var i,
        result = '';
    len = string.length;
    for (i = len - 1; i >= 0; i -= 1) {
        result += string[i];
    }
    return result;
}

// Problem 2:

function problem2() {
    var input = document.getElementById('string2').value;
    if (input) {
        document.getElementById('pr2answer').innerHTML = 'Brackets are put correctly --> ' + checkBrackets(input);
        console.log('Problem 2: Brackets are put correctly --> ' + checkBrackets(input));
    } else {
        document.getElementById('pr2answer').innerHTML = 'String is empty';
    }
    document.getElementById('string2').value = '';
}

function checkBrackets(expression) {
    var i,
        len = expression.length,
        leftBrackets = 0,
        rightBrackets = 0;
    for (i = 0; i < len; i += 1) {
        if (expression[i] === '(') {
            leftBrackets += 1;
        } else if (expression[i] === ')') {
            rightBrackets += 1;
        }

        if (leftBrackets < rightBrackets) {
            return false;
        }
    }
    if (leftBrackets === rightBrackets) {
        return true;
    }
    return false;
}

// Problem 3:

function problem3() {
    var inputText = document.getElementById('string3text').value,
        substring = document.getElementById('string3substring').value;
    if (!inputText || !substring) {
        return (document.getElementById('pr3answer').innerHTML =
            'The fields for text and substring cannot be empty');
    }
    document.getElementById('pr3answer').innerHTML =
        substring.toLowerCase() + ' is found ' + findSubstring(inputText, substring) +
        ' times.';
    console.log('Problem 3: ' + substring.toLowerCase() + ' is found ' + findSubstring(inputText, substring) +
        ' times.');
}

function findSubstring(text, string) {
    var i,
        count = 0,
        textlen = text.length,
        strlen = string.length;
    if (textlen < strlen) {
        return 0;
    }
    text = text.toLowerCase();
    string = string.toLowerCase();
    for (i = 0; i < textlen - strlen; i += 1) {
        if (text.substr(i, strlen) === string) {
            count += 1;
        }
    }
    return count;
}

// Problem 4:

function problem4() {
    var input = document.getElementById('string4text').value;
    result = parseTags(input);
    document.getElementById('pr4answer').innerHTML = result;
    console.log('Problem 4: ' + result);
}

function parseTags(text) {
    var i,
        jump,
        random,
        originalText = text,
        currentStateArr = [],
        newText = [],
        len = text.length;

    for (i = 0; i < text.length; i += 1) {
        if (text[i] === '<') {
            switch (text[i + 1]) {
                case 'u':
                    currentStateArr.push('u');
                    jump = text.indexOf('>', i);
                    i = jump + 1;
                    break;
                case 'l':
                    currentStateArr.push('l');
                    jump = text.indexOf('>', i);
                    i = jump + 1;
                    break;
                case 'm':
                    currentStateArr.push('m');
                    jump = text.indexOf('>', i);
                    i = jump + 1;
                    break;
                case '/':
                    currentStateArr.pop();
                    jump = text.indexOf('>', i);
                    i = jump + 1;
                    break;
            }
        }
        switch (currentStateArr[currentStateArr.length - 1]) {
            case undefined:
                newText.push(text[i]);
                break;
            case 'u':
                newText.push(text[i].toUpperCase());
                break;
            case 'l':
                newText.push(text[i].toLowerCase());
                break;
            case 'm':
                random = Math.random();
                if (random < 0.5) {
                    newText.push(text[i].toLowerCase());
                    break;
                } else {
                    newText.push(text[i].toUpperCase());
                    break;
                }
        }
    }
    return newText.join('');
}

// Problem 5:

function problem5() {
    var input = document.getElementById('string5text').value,
        result = replaceWhiteSpace(input);
    document.getElementById('pr5answer').innerHTML = result;
    console.log('Problem 5: ' + result);
}

function replaceWhiteSpace(text) {
    return (text.split(/\s/g).join('&nbsp;'));
}

// Problem 6:

function problem6() {
    var input = document.getElementById('string6text').value,
        result = extractText(input);
    document.getElementById('pr6answer').innerHTML = result;
    console.log('Problem 6: ' + result);
}

function extractText(html) {
    var len = html.length,
        result = '',
        i;
    for (i = 0; i < len; i += 1) {
        if (html[i] === '<') {
            i = html.indexOf('>', i);
        }
        if (html[i] !== '>') {
            result += html[i];
        }
    }
    return result;
}

// Problem 7:

function problem7() {
    var input = document.getElementById('string7text').value,
        result = parseUrl(input);
    document.getElementById('pr7answer').innerHTML =
        '{<br />' + printObj(result) + '}';
    console.log(result);
}

function parseUrl(url) {
    var indexOfSlash = url.indexOf('/'),
        indexOfSecondSlash = url.indexOf('/', indexOfSlash + 1),
        indexOfThirdSlash = url.indexOf('/', indexOfSecondSlash + 1),
        result = {};

    result.protocol = url.substring(0, url.indexOf(':'));
    result.server = url.substring(indexOfSecondSlash + 1, indexOfThirdSlash);
    result.resource = url.substring(indexOfThirdSlash);

    return result;
}

function printObj(obj) {
    var prop,
        result = '';
    for (prop in obj) {
        result += ('&nbsp;&nbsp;&nbsp;&nbsp;' + prop + ': ' + obj[prop]);
        if (prop !== 'resource') {
            result += ',<br>';
        } else {
            result += '<br>';
        }
    }
    return result;
}

// Problem 8:

function problem8() {
    var input = document.getElementById('string8text').value,
        result = replaceTag(input);
    document.getElementById('pr8answer').value = result;
    console.log('Problem 8: ' + result);
}

function replaceTag(html) {
    while (html.indexOf('<a href') >= 0) {
        html = html.replace('<a href="', '[URL=').
        replace('">', ']').
        replace('</a>', '[/URL]');
    }
    return html;
}

// Problem 9:

function problem9() {
    var input = document.getElementById('string9text').value,
        result = extractEmails(input);
    document.getElementById('pr9answer').innerHTML =
        'Possible emails (only ...@... matched):<br />' + result[0] +
        '<br />Valid emails, meeting other criteria as well:<br />' + result[1];
    console.log('Problem 9: Possible emails (only ...@... matched):\n' + result[0],
        '\nValid emails, meeting other criteria as well:\n' + result[1]);
}

function extractEmails(text) {
    var i,
        len,
        arr = text.split(' '),
        possibleEmails = [],
        validEmails = [];
    for (i = 0, len = arr.length; i < len; i += 1) {
        if ((arr[i].indexOf('@') > 0) &&
            (arr[i].indexOf('@') < (arr[i].length - 1)) &&
            (arr[i].indexOf('@')) == arr[i].lastIndexOf('@')) {
            possibleEmails.push(arr[i]);
        }
    }
    for (i = 0, len = possibleEmails.length; i < len; i += 1) {
        if ((possibleEmails[i].indexOf('.', possibleEmails[i].indexOf('@')) >
                (possibleEmails[i].indexOf('@') + 1)) &&
            (possibleEmails[i].lastIndexOf('.') <
                (possibleEmails[i].length - 1))) {
            validEmails.push(possibleEmails[i]);
        }
    }
    return [possibleEmails.join(', '), validEmails.join(', ')];
}

// Problem 10:

function problem10() {
    var input = document.getElementById('string10text').value,
        result = findPalindromes(input);
    document.getElementById('pr10answer').innerHTML = result;
    console.log('Problem 10: ' + result);
}

function findPalindromes(text) {
    var i,
        result = [],
        arrOfWords = text.split(' ').map(function(item) {
            return item.trim('.,!?()"-');
        });
    len = arrOfWords.length;
    for (i = 0; i < len; i += 1) {
        if (arrOfWords[i].length > 1 &&
            arrOfWords[i].toLowerCase() === reverseWord(arrOfWords[i].toLowerCase())) {
            result.push(arrOfWords[i]);
        }
    }
    return result;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

// http://www.sitepoint.com/trimming-strings-in-javascript/

String.prototype.trimLeft = function(charlist) {
    if (charlist === undefined)
        charlist = "\s";

    return this.replace(new RegExp("^[" + charlist + "]+"), "");
};

String.prototype.trimRight = function(charlist) {
    if (charlist === undefined)
        charlist = "\s";

    return this.replace(new RegExp("[" + charlist + "]+$"), "");
};

String.prototype.trim = function(charlist) {
    return this.trimLeft(charlist).trimRight(charlist);
};

// Problem 11:

function problem11() {
    var result,
        str1 = format('{0}, {1}!', 'Hello', 'World'),
        str2 = format("{0}, {1}, {0} text {2}", 1, "Pesho", "Gosho"),
        str3 = format("Array: {0}, Object: {1}, Boolean: {2}", [1, 2, 3], {
            a: 1,
            b: 2
        }, true);
    result = 'Ex.1: ' + str1 + '<br />' +
        'Ex.2: ' + str2 + '<br />' +
        'Ex.3: ' + str3;
    console.log('Problem 11:\nEx.1: ' + str1 + '\nEx.2: ' + str2 + '\nEx.3: ' + str3);
    document.getElementById('pr11answer').innerHTML = result;
}

function format(str) {

    var newArguments = arguments;
    return str.replace(/{(\d+)}/g, function(match, p1) {
        return newArguments[+p1 + 1];
    });
}

// Problem 12:

function problem12() {
    var people = [{
            name: 'Pesho',
            age: 25
        }, {
            name: 'Gosho',
            age: 30
        }, {
            name: 'Vanko',
            age: 35
        }, {
            name: 'Doncho',
            age: 40
        }],
        divPeople = document.getElementById('list-item'),
        template = divPeople.innerHTML,
        peopleList = generateList(people, template);

    divPeople.innerHTML = peopleList;
    document.body.removeChild(document.getElementById('pr12'));
    document.body.removeChild(document.getElementById('pr12div'));
}

function generateList(people, template) {
    var prop,
        i,
        len,
        liContent,
        props = [],
        peopleList = [];

    peopleList.push('<ul><strong>-\{name\}-</strong><span>-\{age\}-</span >');

    for (prop in people[0]) {
        props.push(prop);
    }

    for (i = 0, len = people.length; i < len; i += 1) {
        peopleList.push('<li>');
        liContent = template;

        for (prop in people[0]) {
            liContent = liContent.replace(new RegExp(
                '\\-{' + prop + '\\}-', "g"), people[i][prop]);
        }

        peopleList.push(liContent);
        peopleList.push('</li>');
    }

    peopleList.push('</ul>');

    return peopleList.join('');
}
