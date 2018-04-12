const HELP = require('./view/help.js');
const LIST = require('./view/list.js');
const ADD = require('./view/add.js');
const FIND_BY_ID = require('./view/find_by_id.js');
const DELETE = require('./view/delete.js');
const COMPLETE = require('./view/complete.js');
const UNCOMPLETE = require('./view/uncomplete.js');
const SEARCH = require('./view/search.js');

let route = {
	render(path, arg = null) {
		switch (path) {
			case 'help':
				return HELP.help.proc(arg);
				break;
			case 'list':
				return LIST.list.proc(arg);
				break;
			case 'errInAdd':
				return ADD.add.proc(arg)
				break;
			case 'findById':
				return FIND_BY_ID.find_by_id.proc(arg);
				break;
			case 'delete':
				return DELETE.deleteTodo.proc(arg);
				break;
			case 'complete':
				return COMPLETE.complete.proc(arg);
				break;
			case 'uncomplete':
				return UNCOMPLETE.uncomplete.proc(arg);
				break;
			case 'search':
				return SEARCH.search.proc(arg);
				break;
		}
	}
}

module.exports = { route };