const express = require('express');
const server = express();

server.get('/', (req, res) => {
	res.send('Ticket bot is loaded');
});

function keepAlive() {
	server.listen(8080, () => {
		console.log('Ticket Bot has sucessfully loaded');
	});
}

module.exports = keepAlive;