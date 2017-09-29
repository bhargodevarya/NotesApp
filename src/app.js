const notes = require('./service/notes.js');
const utils = require('./service/utils.js');
const DiskIO = require('./service/DiskIO.js');
const yargs = require('yargs');

const argv = yargs.argv;

//console.log(argv);
const command = argv._;
//console.log(Object.getOwnPropertyNames(argv));

const note = DiskIO.createNote('my title', 'my content')
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
