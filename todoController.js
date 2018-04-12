const TodoModel = require ('./todoModel.js');
const TodoView = require ('./todoView.js');


class TodoController{

	static jalankanPerintah(perintah, data){
		var model = new TodoModel();

		switch(perintah){

			case 'help' 		: TodoView.help(model.daftarPerintah()); break;
			case 'list' 		: model.readFile(TodoView.daftar); break;
			case 'add'			: model.tambahTask(data, model.writeFile, TodoView.tambahTask); break;
			case 'findById' 	: model.findTask(data, TodoView.findTask); break;
			case 'delete'		: model.hapusTask(data, model.writeFile, TodoView.hapusTask); break;
			case 'complete'		: model.selesaiTask(data, model.writeFile, TodoView.selesaiTask); break;
			case 'uncomplete'	: model.belumSelesaiTask(data, model.writeFile, TodoView.belumSelesaiTask); break;
			case 'search'		: model.cariTask(data, TodoView.cariTask); break;
			default 			: TodoView.help(model.daftarPerintah()); 

		}
	}

}

module.exports = TodoController;
