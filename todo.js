const fs = require('fs')

class Todo{
	constructor(task){
        this.file = JSON.parse(fs.readFileSync('./todo.json'));
        this.idTerbaru = this.file[this.file.length-1].id; 
   	}


	 tambahTask(task){ 
		var taskBaru = { 
	       id : this.idTerbaru + 1, 
	       task: task, 
	       status : false 
	   };
	 }



}


 



var argv = process.argv;
var newtodo = new Todo();

newtodo.tambahTask(argv[3]); 


'use strict';



if (argv[2] == null) {
	console.log("Daftar Command Tersedia :")
	console.log("$ node todo.js list # melihat daftar TODO");
	console.log("$ node todo.js add <definisi_task> # menambahkan todo ke dalam list ( simpan ke json )");
	console.log("$ node todo.js findById <task_id> # melihat detail todo sesuai id nya");
	console.log("$ node todo.js delete <task_id> # menghapus todo sesuai id nya");
	console.log("$ node todo.js complete <task_id> # merubah status todo jadi selesai sesuai id nya");
	console.log("$ node todo.js uncomplete <task_id> # merubah status todo jadi belum selesai sesuai id nya");
	console.log("$ node todo.js search 'aplikasi' # akan menampilkan todo yang mengandung string 'aplikasi'");
}
else if (argv[2] == 'list'){
	 let rawdata = fs.readFileSync('todo.json');  
 
	 if(rawdata == ""){
	 	console.log("Tidak ada list todo");
	 } else{
	    let student = JSON.parse(rawdata);
	 	console.log(student);
	 }
	  
}
else if (argv[2] == 'add') {
	    var data = JSON.parse(fs.readFileSync('./todo.json')); 
        data.push(taskBaru); 
}
 
