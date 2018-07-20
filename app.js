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

var titleOptions = {
    describe : 'Title of note',
    demand: true,
    alias: 't'
}

var bodyOptions = {
    describe: 'Content of note',
    demand: true,
    alias: 'b'
 }

var argv = yargs
        .command("add", "Add a new note" , {
            title: titleOptions,
            body: bodyOptions
        })
        .command("list", "List all the notes")
        .command("remove", "Remove the required note",{
            title: titleOptions
        })
        .command("read", "Read the required note",{
            title: titleOptions
        })
        .help()
        .argv;

var command = argv._[0];

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
    var allNotes = notes.getAll();
    for(note of allNotes){
        notes.logNote(note)
    }
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