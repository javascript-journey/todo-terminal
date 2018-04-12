let deleteTodo = {
	proc(arg) {
		if (arg == 'err1') {		
			console.log('\nTolong masukkan id todo yang ingin Anda hapus.\n');
			console.log('Usage: command <id_task>\n');
		} 
		else if (arg == 'err2') {
			console.log('\nArgumen harus berupa angka.\n');
			console.log('Usage: command <id_task>\n');
		}
		else {
			if (arg == undefined) {
				console.log('\nTodo yang ingin Anda hapus tidak ditemukan.\n')
			} else {
				console.log('\nTodo berhasil dihapus.\n')
			}
		}
	}
}

module.exports = { deleteTodo };