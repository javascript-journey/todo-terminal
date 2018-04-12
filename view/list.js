let list = {
	proc(arg) {
		arg.forEach((todo) => {
			console.log('\nid:', todo.id);
			console.log('text:', todo.text);
			console.log('status:', todo.status, '\n');
		});
	}
}

module.exports = { list };