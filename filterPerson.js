"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persons = void 0;
exports.logPerson = logPerson;
exports.filterPersons = filterPersons;
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'admin' ? person.role : person.occupation));
}
function filterPersons(persons, personType, criteria) {
    // Check if criteria is an object
    if (typeof criteria !== 'object' || criteria === null) {
        throw new Error('Criteria must be an object');
    }
    return persons
        .filter(function (person) { return person.type === personType; })
        .filter(function (person) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
// Filter users by age
var usersOfAge23 = filterPersons(exports.persons, 'user', { age: 23 });
usersOfAge23.forEach(logPerson);
// Filter admins by age
var adminsOfAge23 = filterPersons(exports.persons, 'admin', { age: 23 });
adminsOfAge23.forEach(logPerson);
