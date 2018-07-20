// var obj = {
//     name: "Bharat"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// var personString = '{"name" : "Bharat", "age" : 22}';
// console.log(JSON.parse(personString));
// console.log(typeof JSON.parse(personString));


const fs = require('fs');

var originalNote = {
    title: "Some title",
    body: "Some Body"
};

//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);

