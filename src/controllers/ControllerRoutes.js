const fs = require('fs');
const path = require('path');
const data = require('../data.json');

const pathFile = path.resolve('src', 'data.json');

module.exports = {
	getTodo(req, res) {
		return res.status(200).send(JSON.stringify(data));
	},
	addTodo(req, res) {
		const { todo } = req.params;

		const alreadyExistsTodo = data.todos.some((item) => item === todo);

		if (alreadyExistsTodo) {
			console.log('406: O item já existe');
			return res.status(406).send(
				JSON.stringify({
					massage:
						'O item já existe, verifique suas tarefas e tente novamente.',
				})
			);
		}

		data.todos.push(todo);

		fs.writeFile(pathFile, JSON.stringify(data, null, 4), (err) => {
			if (err) throw err;

			return res.status(201).send(JSON.stringify(data));
		});
	},
	delTodo(req, res) {
		const { todo } = req.params;

		const noExistsTodo = !data.todos.some((item) => item === todo);

		if (noExistsTodo) {
			console.log('406: O item não exite');
			return res.status(406).send(
				JSON.stringify({
					massage:
						'O item não existe, verifique suas tarefas e tente novamente',
				})
			);
		}

		data.todos = data.todos.filter((item) => item !== todo);

		fs.writeFile(pathFile, JSON.stringify(data, null, 4), (err) => {
			if (err) throw err;

			return res.send(JSON.stringify(data));
		});
	},
};
