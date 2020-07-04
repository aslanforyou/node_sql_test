# node_sql_test
Test nodejs server with mysql
Server on 3000 port.

**MySQL part on  /books endpoint.**

{GET}
Returns data from test db, books table. 
&nbsp;
@params: limit, offset, orderField, groupField, order

{POST}
Returns result of adding new row in books table.
@params: title, autor, date, description, image

{PUT}
Returns result of updating a row in books table.
@params: index, title, autor, date, description, image

{DELETE}
Returns result of deleting data row in books table.
@params: index



**File part on /file endpoint**

{GET}
Returns file data if file exists
@params: text  // search string param

{POST}
Returns provided data that was successfully written to the end of file.
Creates file if not exists.
@params: raw text or body data (will convert to string)
