

const http = require('http');
const express = require('express');

const port = 9001;

const app = express()

app.get('/getData', (req, res) => res.send('Hello World!'));

app.route('/postFormData').get(function(req, res) {
		const data = req.body;
		operation.writeData(data).then((dataRes) => {
			res.send("data written ")
		}).catch((err) => {
			res.send(err)
		});
        console.log('Post Form Data - starts----');
		console.log('Post Form Data - ends');
});

app.listen(port, function() {
	console.log('Server is running now. Address http://localhost:%s', port);
});	
