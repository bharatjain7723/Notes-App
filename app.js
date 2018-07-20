console.log("Starting app");

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js') 

const yargs = require('yargs');

// var user = os.userInfo();

// var filteredArray = _.uniq(["Bharat", 1, "Bharat", 1, 2, 3, 4]);
// console.log(filteredArray);


// console.log(_.isString(true));

// console.log(_.isString("Bharat"));


// fs.appendFile('greetings.txt', `Hello ${user.username}!. You are ${notes.age} years old.`, function(err){
//     if(err){
//         console.log("Unable to load file");
//     }
// });

// var res = notes.add(5 , 6);
// console.log(res);

var argv = yargs.argv;

var command = argv._[0];
console.log('Command:', command);
console.log("Yargs", argv);


if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("Note created");
        notes.logNote(note);
    }
    else{
        console.log("Note title taken");
    }
}
else if(command === 'list'){
    notes.getAll();
}
else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var msg = noteRemoved ? 'Note removed' : 'Note not found'
    console.log(msg);
}
else if(command === 'read'){
    var note = notes.readNote(argv.title);    
    if(note){
        console.log("Reading Note");
        notes.logNote(note);
    }
    else{
        console.log("Note not found");
    }
}
else{
    console.log("Command not recognized");  
}