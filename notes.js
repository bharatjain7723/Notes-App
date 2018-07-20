// module.exports.age = 22;

// module.exports.addNote = () => {
//     console.log("addNote");
//     return 'new note';
// };


// module.exports.add = (a, b) =>{
//     return a + b;
// }

const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
         return JSON.parse(notesString);
    }
    catch(e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes= fetchNotes();
    var note = {
        title,
        body
    };

    var duplicatesNotes = notes.filter((note) => note.title === title);

    if(duplicatesNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }  
}

var getAll = () => {
    return fetchNotes();
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

var readNote = (title) => {
    var notes = fetchNotes();
    var requiredNote  = notes.filter((note) => note.title === title);    
    return requiredNote[0];
}

var logNote = (note) => {
    console.log("----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    removeNote,
    readNote,
    logNote
};
// similar to writing addNote : addNote