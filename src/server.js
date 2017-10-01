const express = require('express');
const app = express();

const register = (path,method,callback) => methodCalled(path, method, callback)

const methodCalled = (path, method, cb) => {
  switch (method) {
    case 'get':
      app.get(path, (req, res) => cb(req, res))
      break;
    case 'put':
      app.put(path, (req, res) => cb(req, res))
      break;
    case 'post':
      app.post(path, (req, res) => cb(req, res))
      break;
    case 'delete':
      app.delet(path, (req, res) => cb(req, res))
      break;
    case 'patch':
      app.patch(path, (req, res) => cb(req, res))
      break;
    default:
      console.log("there has been an error");
  }
}

const startServer = (port) => app.listen(port, () => {console.log(`successfully started at ${port}`)})

module.exports = {
  register,
  startServer
}
