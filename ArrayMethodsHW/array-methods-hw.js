// Problem 1

console.log('Problem 1:\n===========================');

var people = createPeople();
people.forEach(function(item) {
    console.log(item);
});

function createPerson(fname, lname, age, gender) {
    return {
        firstname: fname,
        lastname: lname,
        age: age,
        gender: gender
    };
}

function createPeople() {
    var i,
        firstNames = ['Asen', 'Angel', 'Boris', 'Georgi', 'Marin', 'Ana', 'Eli', 'Elena', 'Gergana', 'Mariika'],
        lastNames = ['Ivanov', 'Dimitrov', 'Petrov', 'Georgiev', 'Nikolov', 'Borisova', 'Gigova', 'Atanasova', 'Ivanova', 'Georgieva'],
        arr = [];
    for (i = 0; i < 10; i += 1) {
        arr[i] = createPerson(firstNames[i], lastNames[i], (Math.random() * 80) | 0, (i > 4));
    }
    return arr;
}

console.log('===========================');

// Problem 2

console.log('Problem 2:\n===========================');

var ofAgeOnly =
    people.every(function(item) {
        return item.age >= 18;
    });
console.log(ofAgeOnly);
console.log('===========================');

// Problem 3

console.log('Problem 3:\n===========================');

var underaged =
    people.filter(function(item) {
        return item.age < 18;
    }).forEach(function(item) {
        console.log(item);
    });
console.log('===========================');

// Problem 4

console.log('Problem 4:\n===========================');

var femaleSum =
    people.filter(function(item) {
        return item.gender;
    }).reduce(function(sum, item, i, arr) {
        var count = arr.length;
        return (sum + item.age / count);
    }, 0);

console.log(femaleSum);
console.log('===========================');

// Problem 5

console.log('Problem 5:\n===========================');

if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        var i, len = this.length;
        for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    };
}

var youngestMale =
    people.sort(function(a, b) {
        return a.age - b.age;
    }).find(function(item) {
        return !item.gender;
    });

console.log(youngestMale.firstname, youngestMale.lastname);
console.log('===========================');

// Problem 6

console.log('Problem 6:\n===========================');

var result = people.reduce(function(obj, item) {
    if (obj[item.firstname[0]]) {
        obj[item.firstname[0]].push(item);
    } else {
        obj[item.firstname[0]] = [item];
    }
    return obj;
}, {});

console.log(result);
