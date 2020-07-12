const express = require('express');
const { Client } = require('pg');
const connectionString = 'postgres://postgres:megafish62@localhost:5432/the_mapworks';
const client = new Client({
    connectionString: connectionString
});
function connection(){
    client.connect();
}
function server(){
    var app = express();
    app.set('port', process.env.PORT || 4000);
    app.get('/', function (req, res, next) {
        client.query('SELECT * FROM account', function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res.rows)
            }
        });
    });
    app.listen(4000, function () {
        console.log('Server is running.. on Port 4000');
        client.query('SELECT * FROM account', function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res.rows)
            }
            //res.status(200).send(result.rows);
        });
    });
}

connection();
setTimeout(server, 3000);