let search = {
	proc(arg) {
		if (arg.length < 1) {
			console.log('\nArgumen yang Anda masukkan tidak cocok dengan Todo manapun.\n');
		}
		arg.forEach((todo) => {
			console.log('\nid:', todo.id);
			console.log('text:', todo.text);
			console.log('status:', todo.status, '\n');
		});
	}
}

module.exports = { search };