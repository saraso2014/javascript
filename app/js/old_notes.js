old notes
/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle, header } from 'logger';
/* your imports */

logTitle('JavaScript for Beginners')
/* Variables */

log("thjis is a link");

var name = "Maria Jones";
var age = 21;
var hasDriverLicense = true;
var empty = undefined;

/* Objects */
// a collection of grouped variables
header("");
header("Objects");
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
header("");
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
header("");
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
header("");
header("More Functions");

var person = {name: "Anna", age: 20};
log(Object.values(person));
log(Object.keys({name: "Anna", age}));

// Strings
header("");
header("String Methods");
log("James Bond".toLocaleLowerCase());
log("James Bond".toUpperCase());
log("James Bond".endsWith("Bond"));
log("James Bond".startsWith("James"));

// Loops
header("");
header("Loops");

// Fors
for (var i = 0;  i < 10; i++) {
    log(i);
}

var persons = [
    { name: "Alex", age: 22 },
    { name: "Maria", age: 30 },
    { name: "Sara", age: 23 }
];

//for (var i = 0; i <= persons.length; i++) {
  //  log(persons[i].name);
    //log(persons[i].age);
    //log("--------------------")
//};

var number = 0;

// Whiles
while(number < 5) {
    log(number);
    number += 1
}

// while(number < 5) {
   // log(number),
    // number += 1
// }

var number = 0;
while(number < 5) {
    log(number);
    number += 1;
};

// Do Loop
var i = 0;
do {
    i ++;
    log(i)
} while(i < 5);

//Breaks and Continues
var number = 0;

while(number < 5) {
    log(number);

    if (number == 2) {
        break;
    }
    number ++;


}


while(number < 5) {
    number ++;

    if (number < 5) {
        continue;
    }

    log(number);

    logTitle('JavaScript for Beginners');
    log("If");
    
    var person = {
        name: "Anna",
        age: 16
    }
    
    
    if (person.age >= 18) {
        log(person.name + " is an adult")
    } else if (person.age == 16) {
        log(person.name + " is about to be an adult")
    } else {
        log(person.name + "  not an adult")
    }

    var person = {
        name: "Anna",
        age: 17
    }
    
    switch(true) {
        case (person.age == 17):
            log(person.name + " is about to be an adult");
            break;
            case (person.age >= 18):
            log(person.name + " is an adult");
            break;
        default:
            log(person.name + " is not an adult");
    };
    
    switch (new Date().getDay) {
        case 0:
            log("Saturday");
            break;
        default:
            log("I don't know")
    }