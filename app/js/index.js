/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle, header } from 'logger';
/* your imports */

logTitle('JavaScript for Beginners')
/* Variables */
var name = "Maria Jones";
var age = 21;
var hasDriverLicense = true;
var empty = undefined;

/* Objects */
// a collection of grouped variables
var person = {
    name: "Maria Jones",
    age: 21,
    hasDriverLicense: true,
    dateOfBirth: "01/01/1999",
    address: {
        firstLine: "123",
        postCode: "SE1",
        country: "England",
    }
};


log(JSON.stringify(person));

log(person.name);
log(person.age);
log(person.hasDriverLicense);
log(JSON.stringify(person.address));
log(Object.values(person));

// Var - single
var name = "Alex";
log(name);

// Var - array
var names = ["Sara","Alex","Hannah"];
log(names);
log(names[2]);
log(names.length);

// Loop through arrays - way 1
for (var n of names) {
    log(n);
}

// Loop through arrays - way 2
names.forEach(function(n, index) {
    log(index + " - " + n);
})

// Arithmetic Operators
log("Arithmetic Operators");

var addition = 2 + 2;
var sub = 3 - 90;
var division = 10 / 5;
var multiplication = 3 * 30;
var remainder = 5 % 2;

log(addition);
log(sub);
log(division);
log(multiplication);
log(remainder);

// Functions
header("Functions");

function addNumbers(n1, n2) {
    // Start of method (body)
    // Define logic
    var result = n1 + n2;
    return result;
    // End function
};

var result = addNumbers(10,2);
log(result);

// More functions
header("More Functions");

var person = {name: "Anna", age: 20};
log(Object.values(person));
log(Object.keys({name: "Anna", age}));

// Strings
header("String Methods");

log("James Bond".toLocaleLowerCase());
log("James Bond".toUpperCase());
log("James Bond".endsWith("Bond"));
log("James Bond".startsWith("James"));

// Loops
header("Loops");

// Fors
for (var i = 0;  i < 10; i++) {
    log(i);
}

var persons = [
    { name: "Alex", age: 22 },
    { name: "Maria", age: 30 }
];

for (var i = 0; i <= persons.length; i++) {
    log(persons[i].name);
    log(persons[i].age);
    log("--------------------")
};

var persons = [
    { name: "Alex", age: 22 },
    { name: "Maria", age: 30 }
];

// Whiles
while(true) {
    log("while")
};

while(number < 5) {
    log(number);
    number += 1
}

