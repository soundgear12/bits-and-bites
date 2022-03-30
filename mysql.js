const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lat1618!",
    database: "bits_and_bites"
})
let query = ""

db.connect(err => {
    if (err) throw err;
    console.log("Connection successful!")

    query = "DROP TABLE IF EXISTS BEER"
    executeQuery(query, "Beer table dropped!")

    query = "CREATE TABLE BEER (id INT PRIMARY KEY, name VARCHAR(255), "
        + "type_id INT, size VARCHAR(255), price INT)"
    executeQuery(query, "Beer table created!")

    query = "LOAD DATA LOCAL INFILE 'csv/beer.csv' INTO TABLE BEER FIELDS TERMINATED BY ',' IGNORE 1 LINES"
        + "(id, name, type_id, size, price)"
    executeQuery(query, "Beer table loaded!")

    db.end(err => {
        if (err) throw err;
        console.log("All done! Closing the database connection!")
    })

})

function executeQuery(query, msg) {
    db.query(query, err => {
        if (err) throw err;
        console.log(msg)
    })
}