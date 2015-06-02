// Problem 1:

function problem1() {
    var x1 = document.getElementById('x1').value,
        y1 = document.getElementById('y1').value,
        x2 = document.getElementById('x2').value,
        y2 = document.getElementById('y2').value,
        segment1,
        x3 = document.getElementById('x3').value,
        y3 = document.getElementById('y3').value,
        x4 = document.getElementById('x4').value,
        y4 = document.getElementById('y4').value,
        segment2,
        x5 = document.getElementById('x5').value,
        y5 = document.getElementById('y5').value,
        x6 = document.getElementById('x6').value,
        y6 = document.getElementById('y6').value,
        segment3,
        i;

    for (i = 1; i <= 6; i += 1) {
        if (isNaN(document.getElementById('x' + i).value) ||
            document.getElementById('x' + i).value === '' ||
            isNaN(document.getElementById('y' + i).value) ||
            document.getElementById('y' + i).value === '') {
            document.getElementById('pr1answer').innerHTML = 'Invalid input';
            return;
        }
    }
    p1 = createPoint(x1, y1);
    p2 = createPoint(x2, y2);
    p3 = createPoint(x3, y3);
    p4 = createPoint(x4, y4);
    p5 = createPoint(x5, y5);
    p6 = createPoint(x6, y6);

    if (calculateDistance(p1, p2)) {
        segment1 = createSegment(p1, p2);
        document.getElementById('segment1').innerHTML =
            'Segment 1: p1(' + p1.x + ', ' + p1.y + '), p2(' + p2.x + ', ' + p2.y + ') length: ' + segment1.length;
        console.log('Segment 1: p1(' + p1.x + ', ' + p1.y + '), p2(' + p2.x + ', ' + p2.y + ') length: ' + segment1.length);
    } else {
        document.getElementById('pr1answer').innerHTML = 'Points p1 and p2 cannot create a segment';
        document.getElementById('segment1').innerHTML = 'Points p1 and p2 cannot create a segment';
        console.log('Points p1 and p2 cannot create a segment');
        return;
    }
    if (calculateDistance(p3, p4)) {
        segment2 = createSegment(p3, p4);
        document.getElementById('segment2').innerHTML =
            'Segment 2: p3(' + p3.x + ', ' + p3.y + '), p4(' + p4.x + ', ' + p4.y + ') length: ' + segment2.length;
        console.log('Segment 2: p3(' + p3.x + ', ' + p3.y + '), p4(' + p4.x + ', ' + p4.y + ') length: ' + segment2.length);
    } else {
        document.getElementById('pr1answer').innerHTML = 'Points p3 and p4 cannot create a segment';
        document.getElementById('segment2').innerHTML = 'Points p3 and p4 cannot create a segment';
        console.log('Points p3 and p4 cannot create a segment');
        return;
    }
    if (calculateDistance(p5, p6)) {
        segment3 = createSegment(p5, p6);
        document.getElementById('segment3').innerHTML =
            'Segment 3: p5(' + p5.x + ', ' + p5.y + '), p6(' + p6.x + ', ' + p6.y + ') length: ' + segment3.length;
        console.log('Segment 3: p5(' + p5.x + ', ' + p5.y + '), p6(' + p6.x + ', ' + p6.y + ') length: ' + segment3.length);
    } else {
        document.getElementById('pr1answer').innerHTML = 'Points p5 and p6 cannot create a segment';
        document.getElementById('segment3').innerHTML = 'Points p5 and p6 cannot create a segment';
        console.log('Points p5 and p6 cannot create a segment');
        return;
    }
    document.getElementById('pr1answer').innerHTML =
        'Segments 1, 2, and 3 can form a triangle? --> ' + canFormTriangle(segment1, segment2, segment3);
    console.log('Segments 1, 2, and 3 can form a triangle? --> ' + canFormTriangle(segment1, segment2, segment3));
}

function createPoint(x, y) {
    return {
        'x': x,
        'y': y
    };
}

function createSegment(point1, point2) {
    return {
        'p1': point1,
        'p2': point2,
        'length': calculateDistance(point1, point2)
    };
}

function calculateDistance(point1, point2) {
    return Math.sqrt((point1.x - point2.x) * (point1.x - point2.x) +
        (point1.y - point2.y) * (point1.y - point2.y));
}

function canFormTriangle(sideA, sideB, sideC) {
    if ((sideA.length + sideB.length > sideC.length) &&
        (sideA.length + sideC.length > sideB.length) &&
        (sideB.length + sideC.length > sideA.length)) {
        return true;
    } else {
        return false;
    }
}

// Problem 2:

Array.prototype.remove = function(value) {
    while (this.indexOf(value) >= 0) {
        this.splice(this.indexOf(value), 1);
    }
    return this;
};

function problem2() {
    var input = document.getElementById('arr1').value,
        element = document.getElementById('element1').value,
        result,
        i,
        arr = input.split(','),
        len;

    for (i = 0, len = arr.length; i < len; i += 1) {
        if (!isNaN(arr[i])) {
            arr[i] *= 1;
        }
    }
    result = 'Initial array: ' + arr + '; array after removing ' +
        element + ': ';

    if (!isNaN(element)) {
        result += arr.remove(element * 1);
    } else {
        result += arr.remove(element);
    }

    document.getElementById('pr2answer').innerHTML = result;
    console.log('Problem 2: ' + result);
}

// Problem 3:

function problem3() {
    var obj = {
            stringProperty: 'this is a string',
            numberProperty: 5,
            arrayProperty: [1, 2, 3, 4, 5],
            objectProperty: {
                a: 5,
                b: 7,
                c: [1, 2, 3]
            }
        },
        copy = createDeepCopy(obj),
        result = '',
        prop;
    console.log('Problem 3: Properties of the copy:');
    result += 'Properties of the copy:<br /><br />';

    for (prop in copy) {
        result += (prop + ': ' + copy[prop] + '<br />');
        console.log(prop + ': ' + copy[prop]);
    }

    console.log('Change a reference type property of the original object:');
    result += '<br />Change a reference type property of the original object:<br />';

    obj.arrayProperty[0] = 'This is changed';

    console.log('Object.arrayProperty: ' + obj.arrayProperty);
    result += 'Object.arrayProperty: ' + obj.arrayProperty +
        '<br />The copy is not changed:<br />copy.arrayProperty: ' + copy.arrayProperty;
    console.log('The copy is not changed:');
    console.log('copy.arrayProperty: ' + copy.arrayProperty);
    document.getElementById('pr3answer').innerHTML = result;
}

function createDeepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    var copy = obj.constructor();
    for (var prop in obj) {
        copy[prop] = createDeepCopy(obj[prop]);
    }

    return copy;
}

// Problem 4:

function problem4() {
    var obj = {
            stringProperty: 'this is a string',
            numberProperty: 5,
            arrayProperty: [1, 2, 3, 4, 5],
            objectProperty: {
                a: 5,
                b: 7,
                c: [1, 2, 3]
            }
        },
        property = document.getElementById('property').value;
    if (property !== '') {
        hasProperty(obj, property);
    } else {
        document.getElementById('pr4answer').innerHTML =
            'Enter a property to look for';
    }
}

function hasProperty(obj, property) {
    if (property in obj) {
        document.getElementById('pr4answer').innerHTML =
            'The object contains a property ' + property + ' with value ' + obj[property] + '.';
        console.log('Problem 4: The object contains a property ' + property + ' with value ' + obj[property] + '.');
    } else {
        document.getElementById('pr4answer').innerHTML =
            'The object doesn\'t contain a property ' + property + '.';
    }
}

// Problem 5:

function problem5() {
    var result = findYoungest(generatePeople(5, problem5)),
        i,
        len = result.length;


    console.log('Youngest people:');

    for (i = 0; i < len; i += 1) {
        if (!i) {
            document.getElementById('pr5answer').innerHTML = '';
        }
        document.getElementById('pr5answer').innerHTML +=
            result[i].firstname + ' ' +
            result[i].lastname + ', ' +
            result[i].age + '<br />';
        console.log(result[i].firstname + ' ' +
            result[i].lastname + ', ' +
            result[i].age);
    }
    document.getElementById('second-button5').removeEventListener('click', problem5);
}

function Person(firstname, lastname, age) {
    firstname = firstname || '';
    lastname = lastname || '';
    age = age || null;
    return {
        'firstname': firstname,
        'lastname': lastname,
        'age': age
    };
}

function generatePeople(problemNumber, attachFunction) {
    var people = [
        new Person('Ivan', 'Ivanov', 50),
        new Person('Peter', 'Georgiev', 25),
        new Person('Georgi', 'Petrov', 70),
        new Person('Stefan', 'Nikolov', 50),
        new Person('Nikolai', 'Dimitrov', 25),
        new Person('Ivan', 'Georgiev', 28),
        new Person('Peter', 'Dimitrov', 28),
        new Person('Georgi', 'Ivanov', 50),
        new Person('Stefan', 'Petrov', 55),
        new Person('Nikolai', 'Nikolov', 25)
    ];
    if (!document.getElementById('people' + problemNumber).innerHTML) {
        printPeople(people, problemNumber);
        document.getElementById('second-button' + problemNumber).addEventListener('click', attachFunction);
    } else {
        return people;
    }
}

function printPeople(array, problemNumber) {
    var i,
        peopleElement = '',
        len = array.length;
    console.log('Problem ' + problemNumber + ':');

    for (i = 0; i < len; i += 1) {
        peopleElement +=
            array[i].firstname + ' ' +
            array[i].lastname + ', ' +
            array[i].age + '<br />';
        console.log(array[i].firstname + ' ' +
            array[i].lastname + ', ' +
            array[i].age);
    }
    document.getElementById('people' + problemNumber).innerHTML = peopleElement;
}

function findYoungest(array) {
    var len = array.length,
        i,
        youngest = array[0],
        result = [];

    for (i = 0; i < len; i += 1) {
        if (array[i].age < youngest.age) {
            youngest = array[i];
        }
    }

    for (i = 0; i < len; i += 1) {
        if (array[i].age === youngest.age) {
            result.push(array[i]);
        }
    }

    return result;
}

// Problem 6:

function problem6() {

    var groupedByFirstName = group(generatePeople(6, problem6), 'firstname'),
        groupedByLastName = group(generatePeople(6, problem6), 'lastname'),
        groupedByAge = group(generatePeople(6, problem6), 'age'),
        resultConsole = '',
        resultHTML = '',
        prop;

    resultConsole += '\nGrouped by first name:\n\n';
    resultHTML += '<br />Grouped by first name:<br /><br />';
    for (prop in groupedByFirstName) {
        resultConsole += (prop + ': ' + printArrayOfObjects(groupedByFirstName[prop], 'console'));
        resultHTML += (prop + ': ' + printArrayOfObjects(groupedByFirstName[prop], 'html'));
    }
    resultConsole += '\nGrouped by last name:\n\n';
    resultHTML += '<br />Grouped by last name:<br /><br />';
    for (prop in groupedByLastName) {
        resultConsole += (prop + ': ' + printArrayOfObjects(groupedByLastName[prop], 'console'));
        resultHTML += (prop + ': ' + printArrayOfObjects(groupedByLastName[prop], 'HTML'));
    }
    resultConsole += '\nGrouped by age:\n\n';
    resultHTML += '<br />Grouped by age:<br /><br />';
    for (prop in groupedByAge) {
        resultConsole += (prop + ': ' + printArrayOfObjects(groupedByAge[prop], 'console'));
        resultHTML += (prop + ': ' + printArrayOfObjects(groupedByAge[prop], 'HTML'));
    }
    console.log(resultConsole);
    document.getElementById('pr6answer').innerHTML = resultHTML;
    document.getElementById('second-button6').removeEventListener('click', problem6);
}

function group(array, property) {
    var i,
        len = array.length,
        prop,
        result = {};

    if (property === 'firstname') {
        for (i = 0; i < len; i += 1) {
            if (result[array[i].firstname]) {
                result[array[i].firstname].push(array[i]);
            } else {
                result[array[i].firstname] = [array[i]];
            }
        }
        return result;
    }
    if (property === 'lastname') {
        for (i = 0; i < len; i += 1) {
            if (result[array[i].lastname]) {
                result[array[i].lastname].push(array[i]);
            } else {
                result[array[i].lastname] = [array[i]];
            }
        }
        return result;
    }
    if (property === 'age') {
        for (i = 0; i < len; i += 1) {
            if (result[array[i].age]) {
                result[array[i].age].push(array[i]);
            } else {
                result[array[i].age] = [array[i]];
            }
        }
        return result;
    }
}

function printArrayOfObjects(array, type) {
    var result = '',
        prop,
        len = array.length;

    for (i = 0; i < len; i += 1) {
        for (prop in array[i]) {
            result += (prop + ': ' +
                array[i][prop] + '; ');
        }
        if (type === 'console') {
            result += '\n';
            if (i < len - 1) {
                result += '\t';
            }
        } else {
            result += '<br />';
            if (i < len - 1) {
                result += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }
        }

    }
    return result;
}
