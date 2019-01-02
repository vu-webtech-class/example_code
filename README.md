Framework for Assignment 3: Web Technology at VU Amsterdam
==========================================================

This is a template to help you getting started with implementing a RESTful API
for Assignment 3. 

You may download the three files `server.py`, `wtplugin.py` and `bottle.py`.

Please read and try to understand the example code in `server.py`, 
and see if you can make it run before you make any changes (see below).

The `wtplugin.py` file is used by `server.py` and does not need to be changed by you. 
It takes care of setting up your product database file and other stuff that you need to make your server run smoothly but are not part of the learning goals of this course.

The `bottle.py` file contains the bottle framework and does not to be changed by you either.
It is a straight copy from the bottle website, and is provided here so you do need to look for it your self.
The exact version is https://github.com/bottlepy/bottle/blob/c8179b28d93b2875a31866c6b84a9b5b59c0c8b4/bottle.py

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
This works in all functions with a [routing decorator](http://bottlepy.org/docs/dev/api.html#bottle.Bottle.route)
(e.g. `@route()`, `@get()`, `@post()`, etc.).

Using this cursor, you can execute SQL queries and retrieve results. Have a look at the [documentation
of `sqlite3.Cursor`](https://docs.python.org/2/library/sqlite3.html#sqlite3.Cursor).


Your task
---------

Now it's up to you to fill in the missing bits and pieces according to the design of your API
by adding appropriate routes.

