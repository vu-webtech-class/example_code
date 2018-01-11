Framework for Assignment 3: Web Technology at VU Amsterdam
==========================================================

This is a template to help you getting started with implementing a RESTful API
for Assignment 3. Read and try to understand the code in `server.py`.


Running the server
------------------

You can start the server by executing the Python script:

```
$ python server.py
```

This starts a server at [http://localhost:8080/](http://localhost:8080/). You can verify this with a
browser or a REST client such as `Postman` or `curl`.

Your server restarts automatically everytime you save the file `server.py` if
the reloader is enabled.


Accessing the database
----------------------

The server creates an SQLite database table 'phones' in the file `phones.db`.
This file is re-created whenever you delete it.

You can access this database by adding a parameter `db` to the function in which you need it.
The plugin will provide you a [database cursor](https://docs.python.org/2/library/sqlite3.html#sqlite3.Cursor).
This works in all functions with a [routing decorator](http://bottlepy.org/docs/latest/api.html#bottle.Bottle.route)
(e.g. `@route()`, `@get()`, `@post()`, etc.).

Using this cursor, you can execute SQL queries and retrieve results. Have a look at the [documentation
of `sqlite3.Cursor`](https://docs.python.org/2/library/sqlite3.html#sqlite3.Cursor).


Your task
---------

Now it's up to you to fill in the missing bits and pieces according to the design of your API
by adding appropriate routes.

