const app = require('../server');
const notes = require('../service/notes');

const registerNotes = () => {
  app.register('/note','post',(req, res) => postNote(req, res));
  app.register('/note','get',(req, res) => getNote(req, res))
};

const getNote = (req, res) => {
  notes.listNotes()
  res.send("This is a get request to a get a note")
}
const postNote = (req, res) => {
  notes.addNote()
  res.send("You have added a note" + req.body)
}

module.exports = {
  registerNotes
}
