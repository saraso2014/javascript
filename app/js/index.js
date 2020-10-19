/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle, header } from 'logger';
/* your imports */

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