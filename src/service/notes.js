const addNote = (title,body) => {{{}}
  console.log(`adding a note with title ${title} and content ${body}`);
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
