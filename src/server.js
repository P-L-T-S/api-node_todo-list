const express = require('express');
const server = express();
const cors = require('cors');
const routes = require('./routes');

const setHeader = {
	'Access-Control-Allow-Origin': 'http://localhost:3000',
	'Access-Control-Allow-Methods': 'GET, POST, DELETE',
	'Content-Type': 'text/json',
};

server.use(express.json());

server.use(cors());

server.use((req, res, next) => {
	res.header(setHeader);

	next();
});

server.use(routes);

server.on('error', onError);

function onError(err) {
	if (err) throw err;
}

server.listen(3030, () => console.log('server rodadando na porta 3030'));
