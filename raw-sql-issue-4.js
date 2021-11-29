const mysql = require('mysql2');
const fs = require('fs');

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "raw_builder_orm"
});

connection.connect(function (err, handshakeResult) {

	// Requête SQL à considérer
	connection.query(
		fs.readFileSync('./raw-sql-issue-4.sql', { encoding: 'utf8' })
	, function (err, rows) {

		// Résultat
		console.log(rows);
		// `undefined`

		connection.end();
	});
});