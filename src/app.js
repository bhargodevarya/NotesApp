//const utils = require('./service/utils');
require('./server').startServer(7000)
require('./web/help').registerHelp()
require('./web/notesWeb').registerNotes()

//to create a note use the following
//utils.addNote('myTitle','myContent',['Bhargo','today','today',['my','tags','custom']])
