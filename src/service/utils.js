const _ = require('lodash');
const yargs = require('yargs');

const note = require('../model/note');
const DiskIO = require('./DiskIO');
const notes = require('./notes.js');

const Note = note.Note
const argv = yargs.argv;

//console.log(argv);

//lodash usage
// console.log(_.isString('this is a string'));
// console.log(_.isString(7));
// console.log(_.uniq(['Tom','Jerry','donald','goofy','Tom']));

const command = argv._;

const createNote = (title, content, tags) => {
  const myNote = new Note(title, content, tags)
  console.log(myNote.getTitle(), myNote.getTags(), myNote.getContent(), myNote.getCreatedDate(), myNote.getUpdatedOn());
  return myNote
}

const addNote = (title, content, tags) => {
  const note = createNote(title, content, tags)
  notes.addNote(note)
  //return myNote
}
//validating user input

const validate = (argv) => {
  var result = false;
  var command = argv._
  if(command == 'add') {
    result = _.includes(Object.getOwnPropertyNames(argv),'title') &&
    _.includes(Object.getOwnPropertyNames(argv),'body')
  } else if (command == 'list') {
    return true;
  } else if (command == 'read' || command == 'remove') {
    result = _.includes(Object.getOwnPropertyNames(argv),'title')

  }
  return result
}

//console.log(Object.getOwnPropertyNames(argv));

//const note = DiskIO.createNote('my title', 'my content')

// console.log(typeof note);
// console.log(note);
// DiskIO.writeFile(note)
// DiskIO.writeFile(DiskIO.createNote('my title2','my content2'))
// console.log(DiskIO.readFile())

// if(utils.validate(argv)) {
//   if(command == 'add') {
//     notes.addNote(argv.title,argv.body);
//   } else if (command == 'list') {
//     notes.listNotes()
//   } else if (command == 'remove') {
//     notes.removeNote(argv.title)
//   } else if (command == 'read') {
//     notes.readNote(argv.title)
//   }
// } else {
//     console.log("please pass title and body flags");
// }

module.exports = {
  createNote,
  validate,
  addNote
}
