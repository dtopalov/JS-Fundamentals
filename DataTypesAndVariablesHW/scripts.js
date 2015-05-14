//Task 1

var intLit = 1,
    floatLit = 1.05,
    boolLit = true,
    stringLit = "Yo",
    objectLit = {
    name: 'Todor',
    age: 16
    },
    arrayLit = [1, 2, 3],
    functionLit = function (){ 
                    alert('This is the function literal'); 
                  };

//Task 2

var quotedString = '"How you doin\'?", Joey said.',
    newDiv = document.createElement('div');

newDiv.innerHTML = quotedString;
document.getElementById('task2').appendChild(newDiv);
console.log('Task 2: Quoted string - ' + quotedString);

//Task 3

var arrayOfVariables = [
        intLit,
        floatLit,
        boolLit,
        stringLit,
        objectLit,
        arrayLit,
        functionLit,
        quotedString
    ];

console.log('Task 3: \n')

for (var i = 0; i < arrayOfVariables.length - 1; i+=1) {
    getTypeOf(arrayOfVariables[i], "task3");
    console.log('Type of ' + arrayOfVariables[i] + ' is: ' + typeof(arrayOfVariables[i]));
};

//Task 4

console.log('Task 4: \n')

var nullVar = null,
    undefinedVar = undefined;

console.log('Type of ' + nullVar + ' is: ' + typeof(nullVar));
console.log('Type of ' + undefinedVar + ' is: ' + typeof(undefinedVar));

getTypeOf(nullVar, "task4");
getTypeOf(undefinedVar, "task4");

//Visualize

function getTypeOf(obj, taskNumberId) {
    var currDiv = document.createElement('div');
    var result = 'The type of ' + obj + ' is ' + '<span style="color:magenta">' + typeof (obj) + '</span>';
    currDiv.innerHTML = result + ' ';
    document.getElementById(taskNumberId).appendChild(currDiv);
}

//Styles

var divs = document.getElementsByTagName("div"),
    container = document.getElementById("container");

for (var i = 0; i < divs.length; i+=1) {
    divs[i].style.border="1px solid black"
    divs[i].style.padding="10px"
    divs[i].style.width="96%"
};

container.style.width = "520px";