let help = {
	proc(arg) {
		if (arg[1] == 'err') {
			console.log('\nCommand tidak tersedia.\n');
			console.log(arg[0]);
		} else {
			console.log(arg[0]);
		}
	}
}

module.exports = { help };