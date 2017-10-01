const app = require('../server');

// app.register('/','get',(req,res) => {
//   res.send("This is the help section")
// });

const registerHelp = () => {
  app.register('/help','get',(req, res) => {
    //console.log("executing the callback");
    res.send("This is the help section")
  }),
  app.register('/help','post',(req, res) => {
    //console.log("executing the callback");
    res.send("This is the help section")
  })
  //console.log("help has been registered");
}

module.exports = {
  registerHelp
}
