'use strict';

const addNote = (note) => {
  //title has to be unique
  //fetch all notes, check if te title is unique
  //yes, save; else throw exception, show message to user
  console.log(`adding a note with title ${note.getTitle()}`);
}

const listNotes = () => {
  console.log("list all notes");
}

const readNote = (title) => {
  console.log(`Read the note with title ${title}`);
}

const removeNote = (title) => {
  console.log(`Remove the note with title ${title}`);
}

module.exports = {
  addNote,
  listNotes,
  readNote,
  removeNote,
}
