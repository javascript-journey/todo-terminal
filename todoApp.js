const TodoController = require('./todoController.js');

var myArg = process.argv;
var todoApp = TodoController.jalankanPerintah(myArg[2], myArg[3])