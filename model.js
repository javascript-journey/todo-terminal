'use strict';

const fs = require('fs');

class Model {
	constructor(){
		this._todo = [];
	}	
	get todo(){
		let data = fs.readFileSync('todo.json');
		let todo = JSON.parse(data);
		return this._todo = todo;
	}
	syncronData(){
		let data = JSON.stringify(this._todo, null, 2);  
		fs.writeFileSync('todo.json', data); 
	}
	addTodo(newTask) {
		let lastIndex = this.todo.length - 1;
		let newId = this.todo[lastIndex].id + 1;
		let newTodo = {};
		newTodo.id = newId;
		newTodo.task = newTask;
		newTodo.complete = false;
		this.todo.push(newTodo);
		this.syncronData();
	}
	cekTodo(id){
		let index = 0;

		for (let i = 0, len = this.todo.length; i < len; i++) { 
			if (id - this.todo[i].id == 0) {
				index += i;
			}
		} 

		return index;
	}
	detailTodo(id){
		
		let index = this.cekTodo(id);       

		if (index >= 0) {
			return this.todo[index];
		}else{
			return index;
		}
	}
	deleteTodo(id){
		let index = this.cekTodo(id); 
		if (index >= 0) {
			this.todo.splice(index,1);
			this.syncronData();
			return true;
		}else{
			return false;
		}
	}
	completeTodo(id){
		let index = this.cekTodo(id); 
		if (index >= 0) {
			this.todo[index].complete = true;
			this.syncronData();
			return true;
		}else{
			return false;
		}
	}
	unCompleteTodo(id){
		let index = this.cekTodo(id); 
		if (index >= 0) {
			this.todo[index].complete = false;
			this.syncronData();
			return true;
		}else{
			return false;
		}
	}

}

module.exports = new Model();