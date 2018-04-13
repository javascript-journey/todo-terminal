
class View{
	init(todo){
		this.loadTodo(todo);
	}
	loadTodo(todo){
		let dataTodo = todo;
		
		console.log('Daftar Todo\n');
		console.log('ID 	  Task 			 	Status ');
		console.log('————————|———————————————————————|————————————————————');
		for (let i = 0, len = dataTodo.length; i < len; i++) { 
			if (dataTodo[i].complete === true) {
				var status = 'Selesai';
			}else{
				var status = 'Belum Selesai';
			}
			console.log(dataTodo[i].id+'	|'+dataTodo[i].task+'		|'+status+'');
		} 
	}
	viewDetail(detailTodo){
		console.log('ID 	  Task 			 	Status ');
		console.log('————————|———————————————————————|————————————————————');
		if (detailTodo.complete === true) {
			var status = 'Selesai';
		}else{
			var status = 'Belum Selesai';
		}
		console.log(detailTodo.id+'	|'+detailTodo.task+'		|'+status+'');
	}
	alert(pesan){
		console.log(pesan);
	}
	resultSearch(hasil){
		if (hasil.length > 0) {
			console.log("hasil pencarian");
			this.loadTodo(hasil);
		}else{
			this.alert("...Data Tidak ditemukan...")
		}
	}
	help(){
		console.log("Tugas Membuat todo terminal")
		console.log("Daftar Perintah")
		console.log()
		console.log("$ node todo.js # menjalankan help");
		console.log("$ node todo.js # menampilkan command apa saja yang tersedia");
		console.log("$ node todo.js list # melihat daftar TODO");
		console.log("$ node todo.js add <definisi_task> # menambahkan todo ke dalam list ( simpan ke json )");
		console.log("$ node todo.js findById <task_id> # melihat detail todo sesuai id nya ");
		console.log("$ node todo.js delete <task_id> # menghapus todo sesuai id nya");
		console.log("$ node todo.js complete <task_id> # merubah status todo jadi selesai sesuai id nya");
		console.log("$ node todo.js uncomplete <task_id> # merubah status todo jadi belum selesai sesuai id nya");
		console.log("$ node todo.js search 'aplikasi' # akan menampilkan todo yang mengandung string 'aplikasi' ")

	}
}

module.exports = new View();