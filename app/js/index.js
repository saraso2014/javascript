/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */

logTitle('Variables')
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