// Problem 1

console.log('Problem 1:\n===========================');

var people = createPeople(10);

function createPerson(fname, lname, age, gender) {
    return {
        firstname: fname,
        lastname: lname,
        age: age,
        gender: gender
    };
}

function createPeople(number) {
    var i,
        arr = [];
    for (i = 0; i < number; i += 1) {
        arr[i] = createPerson('Name' + (i + 1), 'Lastname' + (i + 1), (Math.random() * 80) | 0, (Math.random() >= 0.5));
    }
    return arr;
}

console.log(people);
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
