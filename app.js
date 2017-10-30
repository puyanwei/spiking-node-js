let events = require('events');

// example 1
// let myEmitter = new events.EventEmitter();
// myEmitter.on("someEvent", message => console.log(message));
// myEmitter.emit("someEvent", "the event was emitted");

let util = require('util');

let Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let ryan = new Person('ryan');
let people = [james, mary, ryan];

// people.forEach(person) => {
//   person.on('speak', (message) => {
//     console.log(person.name + ' said: ' + message);
//   });
// };

people.forEach(person => {
  person.on('speak', message => {
    console.log(person.name + ' said: ' + message);
  });
});

james.emit('speak', 'hello there');
