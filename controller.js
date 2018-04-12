
const Model = require('./model');
const View = require('./view');

class Controller {
	init(){
		View.init(this.getTodo());
	}
	getTodo(){
		return Model.todo;
	}
	addTodo(newTask){
		Model.addTodo(newTask);
		this.successAddTodo(newTask);
	}
	successAddTodo(newTask){
		let pesan = "Berhasil Menambahkan Task "+newTask;
		View.alert(pesan);
		this.init();
	}
	detailTodo(id){
		let detailTodo = Model.detailTodo(id);
		if (detailTodo == -1) {
			let pesan = "Detail Todo yang anda masukan tidak terdaftar";
			
			View.alert(pesan);
		}else{
			View.viewDetail(detailTodo);
		}
	}
	deleteTodo(id){
		let deleteTodo = Model.deleteTodo(id);
		if (deleteTodo === true) {
			let pesan = "Todo berhasil dihapus";
			View.alert(pesan);
			this.init();
		}else{
			let pesan = "Todo gagal dihapus, id yang anda masukan tidak terdaftar";
			View.alert(pesan);
		}
	}
	completeTodo(id){
		let completeTodo = Model.completeTodo(id);
		if (completeTodo === true) {
			let pesan = "Todo berhasil diselesaikan";
			View.alert(pesan);
			this.init();
		}else{
			let pesan = "Todo gagal diselesaikan, id yang anda masukan tidak terdaftar";
			View.alert(pesan);
		}
	}
	unCompleteTodo(id){
		let unCompleteTodo = Model.unCompleteTodo(id);
		if (unCompleteTodo === true) {
			let pesan = "Todo berhasil dibatalkan";
			View.alert(pesan);
			this.init();
		}else{
			let pesan = "Todo gagal dibatalkan, id yang anda masukan tidak terdaftar";
			View.alert(pesan);
		}
	}
	searchTask(search){

		var hasil = [];
		var todo = this.getTodo();
		for (var i = 0; i < todo.length; i++) {
			let str = todo[i].task;
			var taskSearch = str.match(new RegExp(search,'gi'));
			if (taskSearch != null) {
				hasil.push(todo[i]);
			}

		}
		View.resultSearch(hasil);	

	}
	help(){
		View.help();
	}
}

module.exports = Controller;