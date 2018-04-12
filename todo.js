const CONTROLLER = require('./controller.js');
let kernel = CONTROLLER.cont;
let request = process.argv;

kernel.send(request);
