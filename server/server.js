var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());


// app.post('/todos', (req, res) => {
//     var todo = new Todo ({
//         text: req.body.text
//     });

//     todo.save().then((doc)=> {
//         res.send(doc);
//     }, (e) => {
//         res.status(400).send(e)
//     })

// }, (e) => {
//     console.log('Error :' , e)
// });

app.post('/todos', (req, res) => {

    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((docs) => {
        res.send(docs);
    }, (e) => {
        res.send(e)
    });

}, (e) => {
    console.log('Error : ',e)
})



app.listen(3000, () => {
    console.log('Started Server on port :3000');
});