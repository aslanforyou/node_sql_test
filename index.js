const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text({type: '*/*'}));


const booksRouter = require('./routes/books');
const fileRouter = require('./routes/file');

app.use('/books', booksRouter);
app.use('/file', fileRouter);

app.listen(3000, () => {
    console.log('App listening on port 3000');
});