const _ = require('lodash');

//lodash usage
// console.log(_.isString('this is a string'));
// console.log(_.isString(7));
// console.log(_.uniq(['Tom','Jerry','donald','goofy','Tom']));

//validating user input

module.exports.validate = (argv) => {
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
