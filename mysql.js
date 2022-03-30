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
    db.query(query, err => {
        if (err) throw err;
        console.log("Beer table dropped!")
    })

    query = "CREATE TABLE BEER (id INT PRIMARY KEY, name VARCHAR(255), "
        + "type_id INT, size VARCHAR(255), price INT)"
    db.query(query, err => {
        if (err) throw err;
        console.log("Beer table created!")
    })

    query = "LOAD DATA LOCAL INFILE 'csv/beer.csv' INTO TABLE BEER FIELDS TERMINATED BY ',' IGNORE 1 LINES"
        + "(id, name, type_id, size, price)"
    db.query(query, err => {
        if (err) throw err;
        console.log("Beer table loaded!")
    })

    db.end(err => {
        if (err) throw err;
        console.log("All done! Closing the database connection!")
    })

})