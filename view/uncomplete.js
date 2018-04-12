let uncomplete = {
	proc(arg) {
		if (arg == 'err1') {		
			console.log('\nTolong masukkan id todo yang ingin Anda ubah statusnya.\n');
			console.log('Usage: command <id_task>\n');
		} 
		else if (arg == 'err2') {
			console.log('\nArgumen harus berupa angka.\n');
			console.log('Usage: command <id_task>\n');
		}
		else {
			if (arg == undefined) {
				console.log('\nTodo yang tidak ditemukan.\n')
			} else {
				console.log('\nStatus Todo berhasi diubah.\n')
			}
		}
	}
}

module.exports = { uncomplete };