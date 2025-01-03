// ###############################################################################
// Web Technology at VU University Amsterdam
// Assignment 3
//
// The assignment description is available on Canvas.
// Please read it carefully before you proceed.
//
// This is a template for you to quickly get started with Assignment 3.
// Read through the code and try to understand it.
//
// Have you read the zyBook chapter on Node.js?
// Have you looked at the documentation of sqlite?
// https://www.sqlitetutorial.net/sqlite-nodejs/
//
// Once you are familiar with Node.js and the assignment, start implementing
// an API according to your design by adding routes.

// ###############################################################################
//
// Database setup:
// First: Our code will open a sqlite database file for you, and create one if it not exists already.
// We are going to use the variable "db' to communicate to the database:
// If you want to start with a clean sheet, delete the file 'media.db'.
// It will be automatically re-created and filled with one example item.

const sqlite = require("sqlite3").verbose();
let db = my_database("./travel.db");

// ###############################################################################
// The database should be OK by now. Let's setup the Web server so we can start
// defining routes.
//
// First, create an express application `app`:

var express = require("express");
var app = express();

// We need some middleware to parse JSON data in the body of our HTTP requests:
app.use(express.json());

// ###############################################################################
// Routes
//
// TODO: Add your routes here and remove the example routes once you know how
//       everything works.
// ###############################################################################

// This example route responds to http://localhost:3000/hello with an example JSON object.
// Please test if this works on your own device before you make any changes.
// Do not remove this endpoint as it is used for codegrade evaluation.
app.get("/hello", function (req, res) {
  response_body = { Hello: "World" };

  // This example returns valid JSON in the response, but does not yet set the
  // associated HTTP response header.  This you should do yourself in your
  // own routes!
  res.json(response_body);
});

// This route responds to http://localhost:3000/db-example by selecting some data from the
// database and return it as JSON object.
// Please test if this works on your own device before you make any changes.
app.get("/db-example", function (req, res) {
  // Example SQL statement to select the name of all products from a specific brand
  db.all(
    `SELECT * FROM travel WHERE place=?`,
    ["Amsterdam"],
    function (err, rows) {
      // TODO: add code that checks for errors so you know what went wrong if anything went wrong
      // TODO: set the appropriate HTTP response headers and HTTP response codes here.

      // # Return db response as JSON
      return res.json(rows);
    }
  );
});

app.post("/post-example", function (req, res) {
  // This is just so you may check if there is any data posted in the body of the HTTP request:
  console.log(req.body);
  return res.json(req.body);
});

// ###############################################################################
// This should start the server, after the routes have been defined, at port 3000:

app.listen(3000);
console.log(
  "Your Web server should be up and running, waiting for requests to come in. Try http://localhost:3000/hello"
);

// ###############################################################################
// Some helper functions called above
function my_database(filename) {
  // Conncect to db by opening filename, create filename if it does not exist:
  var db = new sqlite.Database(filename, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the travel database.");
  });
  // Create our travel table if it does not exist already:
  db.serialize(() => {
    db.run(`
        	CREATE TABLE IF NOT EXISTS travel
        	 (
                    id INTEGER PRIMARY KEY,
                    place CHAR(100) NOT NULL,
                    visited CHAR(100) NOT NULL,
                    keywords CHAR(256) NOT NULL,
                    image char(2048) NOT NULL,
                    description CHAR(1024) NOT NULL
		 )
		`);
    db.all(`select count(*) as count from travel`, function (err, result) {
      if (result[0].count == 0) {
        db.run(`INSERT INTO travel (image, place, visited, keywords, description) VALUES (?, ?, ?, ?, ?)`, [
          "https://i1.pickpik.com/photos/294/94/486/urban-bike-a82f94fdeed9cfbfbd1fd3723e97d2db.jpg",
          "Amsterdam",
          "4",
          "canals, coffee shops, tulips",
          "Amsterdam was founded at the mouth of the Amstel River, which was dammed to control flooding. Originally a small fishing village in the 12th century, Amsterdam became a major world port during the Dutch Golden Age of the 17th century, when the Netherlands was an economic powerhouse.",
      ]);
        console.log("Inserted dummy example entry into empty database");
      } else {
        console.log(
          "Database already contains",
          result[0].count,
          " item(s) at startup."
        );
      }
    });
  });
  return db;
}
