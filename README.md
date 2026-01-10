Framework for Assignments: Web Technology at VU Amsterdam
==========================================================
This is a template to be used for each assignment during the course. For details on the assignments and their requirements, see the [canvas page](https://canvas.vu.nl/courses/83680). 

## Submission
In order to submit, you need to create a zip file of each stage in your project. To do this, we have a basic Makefile (for Linux/Mac) and a `build.bat` script (for Windows) that you can use.

### Unix (Linux/MacOS)
- First, make sure you have `zip` installed. On Ubuntu, you can do this by running `sudo apt install zip`.
- Then, in the Makefile, change the value of the "labNumber" variable to your own lab number
- Each assignment has a different command
  - `make a1` for assignment 1
  - `make a2` for assignment 2
  - `make a3` for assignment 3
  - `make all` to build all the assignments

- Once submitted you can also run `make clean` to delete the zip files.

### Windows
- In the `build.bat` file, change the value of the "labNumber" variable to your own lab number.
- Each assignment has a different command (run these in PowerShell or cmd):
  - `.\build.bat a1` for assignment 1
  - `.\build.bat a2` for assignment 2
  - `.\build.bat a3` for assignment 3
  - `.\build.bat all` to build all the assignments

- Once submitted you can also run `.\build.bat clean` to delete the zip files.

The naming of the files is important for assignment 1 as your `.html` and `.css` files are checked using CodeGrade's AutoTesting, so please don't change their names.

You can base each subsequent assignment on the previous one, so you don't have to start from scratch each time. The easiest way to do this would be to copy the necessary files from one folder to the next.

## Assignment 3: "A RESTful HTTP API"
There is a template file `server.js` to help you getting started with implementing a RESTful API. Be sure to work on this assignment in the `a3-server` folder, and not the root folder of your repository.
- Make sure you have the sqlite3, express and body-parser modules installed:

```bash
$ npm install sqlite3@5.1.2 express
```

Please read and try to understand the example code in `server.js`, 
and see if you can make it run before you make any changes (see below).

### Running the server

You can start the server on a command line (Terminal, Powershell) by executing:

```
$ npm start
```

This starts a server responding to 
[http://localhost:3000/hello](http://localhost:3000/hello) and
[http://localhost:3000/db-example](http://localhost:3000/db-example). 
You can verify this with a
browser or better: a REST client such as `Postman` (see zyBook 10.11 developer tools) or `curl`.


### Accessing the database

The server automatically creates an SQLite database table 'media' in the file `media.db`, with example entries for testing purposes.
This file is re-created whenever you delete it, and restart the server.

Using the db object, you can execute SQL queries and retrieve results. Have a look at the [documentation
of `sqlite3`](https://www.sqlitetutorial.net/sqlite-nodejs/).


### Your task

Now it's up to you to fill in the missing bits and pieces according to the design of your API
by adding appropriate routes. Also use the examples in the zyBook to create a package.json file that defines how to easily start and test your server.
