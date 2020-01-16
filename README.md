Framework for Assignment 3: Web Technology at VU Amsterdam
==========================================================

This is a template to help you getting started with implementing a RESTful API
for Assignment 3. 

You may download the file `server.js` 

Please read and try to understand the example code in `server.js`, 
and see if you can make it run before you make any changes (see below).

Running the server
------------------

You can start the server by executing the Python script:

```
$ node server.js
```

This starts a server responding to 
[http://localhost:3000/hello](http://localhost:3000/hello) and
[http://localhost:3000/db-example](http://localhost:3000/db-example). 
You can verify this with a
browser or a REST client such as `Postman` or `curl`.



Accessing the database
----------------------

The server creates an SQLite database table 'phones' in the file `phones.db`.
This file is re-created whenever you delete it, and restart the server.

Used the db object, you can execute SQL queries and retrieve results. Have a look at the [documentation
of `sqlite3`](https://www.sqlitetutorial.net/sqlite-nodejs/).


Your task
---------

Now it's up to you to fill in the missing bits and pieces according to the design of your API
by adding appropriate routes.

