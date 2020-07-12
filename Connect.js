/*
var pg = require('pg');
var conString = "postgres://postgres:megafish62@localhost:5432/the_mapworks";

var client = new pg.Client(conString);
client.connect();

var x = 5;

while (x > 0) {
    client.query("select* from account");
    x = x - 1;
}

var query = client.query("SELECT * FROM tilemap");
*/

/*
const { Client } = require('pg');
var connectionString = "postgres://postgres:megafish62@localhost:5432/the_mapworks";
const client = new Client({
    connectionString: connectionString
});
*/

/*
query.on('row', function(row) {
    console.log(row);
});

query.on('end', function() {
    client.end();
});

client.query({
    name: 'insert beatle',
    text: "INSERT INTO beatles(name, height, birthday) values($1, $2, $3)",
    values: ['George', 70, new Date(1946, 02, 14)]
});

client.query({
    name: 'insert beatle',
    values: ['Paul', 63, new Date(1945, 04, 03)]
});
var query = client.query("SELECT * FROM beatles WHERE name = $1", ['john']);

query.on('row', function(row) {
    console.log(row);
    console.log("Beatle name: %s", row.name);
    console.log("Beatle birth year: %d", row.birthday.getYear());
    console.log("Beatle height: %d' %d\"", Math.floor(row.height / 12), row.height % 12);
});

query.on('end', function() {
    client.end();
});
*/