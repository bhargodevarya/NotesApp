const fs = require('fs');

function note(title, content) {
  this.title = title;
  this.content =  content
}

const createNote = (title, content) => {
  const myNote = new note(title, content)
  console.log(myNote)
  return myNote
}

const writeFile = (note) => {
  fs.writeFileSync('notes.json', JSON.stringify(note));
}

const readFile = () => {
  var content = fs.readFileSync('notes.json')
  return JSON.parse(content);
}

module.exports = {
  createNote,
  writeFile,
  readFile,
  note
}
