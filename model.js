let fs = require('fs');

let todo = {
	lastId() {
		let data = fs.readFileSync('todo.json');		
		data = JSON.parse(data);
		let res = [];

		data.forEach((todo) => {
			res.push(todo.id);
		});
		
		res.sort((a,b) => b - a);

		return res[0];
	},
	listTodo() {
		let data = fs.readFileSync('todo.json');
		return JSON.parse(data);
	},
	addTodo(todo) {
		fs.writeFileSync('todo.json', todo);
	},
	findTodo(todo_id) {
		let data = fs.readFileSync('todo.json');
		data = JSON.parse(data);
		let res;

		for (i = 0; i < data.length; i++) {
			if (data[i].id != todo_id) {
				continue;
			}
			res = [data[i]];
		}

		return res;
	},
	deleteTodo(todo_id) {
		let data = fs.readFileSync('todo.json');
		data = JSON.parse(data);
		let res = [];
		let avail;

		for (i = 0; i < data.length; i++) {
			if (data[i].id == todo_id) {
				avail = true;
				continue;
			}
			res.push(data[i]);
		}
		fs.writeFileSync('todo.json', JSON.stringify(res));
		return avail;
	},
	completeTodo(todo_id) {
		let data = fs.readFileSync('todo.json');
		data = JSON.parse(data);
		let res = [];
		let avail;

		for (i = 0; i < data.length; i++) {
			if (data[i].id == todo_id) {
				avail = true;
				data[i].status = 'done';
			}
			res.push(data[i]);
		}
		fs.writeFileSync('todo.json', JSON.stringify(res));
		return avail;
	},
	uncompleteTodo(todo_id) {
		let data = fs.readFileSync('todo.json');
		data = JSON.parse(data);
		let res = [];
		let avail;

		for (i = 0; i < data.length; i++) {
			if (data[i].id == todo_id) {
				avail = true;
				data[i].status = 'undone';
			}
			res.push(data[i]);
		}
		fs.writeFileSync('todo.json', JSON.stringify(res));
		return avail;
	},
	searchTodo(arg) {
		let data = fs.readFileSync('todo.json');
		data = JSON.parse(data);
		let res = [];

		for (i = 0; i < data.length; i++) {
			if (data[i].text.search(arg) != -1) {
				res.push(data[i]);
			}
		}

		return res;
	}
}

module.exports = { todo };