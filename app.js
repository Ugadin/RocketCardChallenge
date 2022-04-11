const express = require('express');
const app = express();
const router = require('./routes/router');


app.use('/public', express.static('public'));
app.use('/js', express.static('js'));


app.set('view engine', 'ejs');



app.use(router)

app.listen(8080, function (req, res) {
    console.log('Server is running on port 8080');
})