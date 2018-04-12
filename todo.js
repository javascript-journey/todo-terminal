 const Controller = require('./controller');

 const controllerTodo = new Controller();

 class Todo{
 	init(argv){
 		var perintah = argv[2];
 		var id = argv[3];
 		var data = "";
 		for (var i = 0; i < argv.length; i++) {
 			if (i >= 3) {
 				data += argv[i]+" ";
 			}
 		}
 		if (perintah == "list") {
 			controllerTodo.init();
 		}else if (perintah == "add") {
 			controllerTodo.addTodo(data);
 		}else if (perintah == "findById") {
 			controllerTodo.detailTodo(id);
 		}else if (perintah == "delete") {
 			controllerTodo.deleteTodo(id);
 		}else if (perintah == "complete") {
 			controllerTodo.completeTodo(id);
 		}else if (perintah == "uncomplete") {
 			controllerTodo.unCompleteTodo(id);
 		}else{
 			controllerTodo.help();
 		}
 	}
 }

 var argv = process.argv;
 var runTodo = new Todo();
 runTodo.init(argv);