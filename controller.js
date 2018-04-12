const MODEL = require('./model.js');
const ROUTER = require('./router.js');
let Todo = MODEL.todo;
let View = ROUTER.route;

let cont = {
	send(arg) {
		let fs = require('fs');
		let help = fs.readFileSync('_help.txt');

		if (arg[2] == undefined) {
			View.render('help', [help.toString(), '']);
		}
		else if (arg[4] != undefined) {
			View.render('help', [help.toString(), 'err']);
		}
		else {
			switch (arg[2]) {
				case 'list':
					View.render('list', Todo.listTodo());
					break;
				case 'add':
					if (arg[3] == undefined) {
						View.render('errInAdd');
					} else {
						let data = Todo.listTodo();
						newTodo = { 'id': (Todo.lastId() + 1), 'text': arg[3], 'status': 'undone' };
						data.push(newTodo);
						Todo.addTodo(JSON.stringify(data));
					}
					break;
				case 'findById':
					if (arg[3] == undefined) {
						View.render('findById', 'err1');
					} else {
						if (!arg[3].match(/[1-9]/)) {
							View.render('findById', 'err2');
						} else {
							let data = Todo.findTodo(arg[3]);

							View.render('findById', data);
						}
					}
					break;
				case 'delete':
					if (arg[3] == undefined) {
						View.render('delete', 'err1');
					} else {
						if (!arg[3].match(/[1-9]/)) {
							View.render('delete', 'err2');
						} else {
							let data = Todo.deleteTodo(arg[3]);

							View.render('delete', data);
						}
					}
					break;
				case 'complete':
					if (arg[3] == undefined) {
						View.render('complete', 'err1');
					} else {
						if (!arg[3].match(/[1-9]/)) {
							View.render('complete', 'err2');
						} else {
							let data = Todo.completeTodo(arg[3]);

							View.render('complete', data);
						}
					}
					break;
				case 'uncomplete':
					if (arg[3] == undefined) {
						View.render('uncomplete', 'err1');
					} else {
						if (!arg[3].match(/[1-9]/)) {
							View.render('uncomplete', 'err2');
						} else {
							let data = Todo.uncompleteTodo(arg[3]);

							View.render('uncomplete', data);
						}
					}
					break;
				case 'search':
					if (arg[3] != undefined) {	
						let data = Todo.searchTodo(arg[3]);

						View.render('search', data);
					}
					break;
				default:
					let fs = require('fs');
					let help = fs.readFileSync('_help.txt');

					View.render('help', [help.toString(), 'err']);
					break;
			}
		}
	}
}

module.exports = { cont };