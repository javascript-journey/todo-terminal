let find_by_id = {
	proc(arg) {
		if (arg == 'err1') {		
			console.log('\nTolong masukkan id todo yang ingin Anda temukan.\n');
			console.log('Usage: command <id_task>\n');
		} 
		else if (arg == 'err2') {
			console.log('\nArgumen harus berupa angka.\n');
			console.log('Usage: command <id_task>\n');
		}
		else {
			if (arg == undefined) {
				console.log('\nTodo yang Anda cari tidak ditemukan.\n')
			} else {
				arg.forEach((todo) => {
					console.log('\nid:', todo.id);
					console.log('text:', todo.text);
					console.log('status:', todo.status, '\n');
				});
			}
		}
	}
}

module.exports = { find_by_id };