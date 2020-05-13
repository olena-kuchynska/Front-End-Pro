const path = require('path'); // module for working with path
const express = require('express');
/* const request = require('request'); */
const bodyParser = require('body-parser');
let MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

let app = express(); //creating server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

let db;
 

const url = 'mongodb://localhost:27017';
const dbname = "myDB";
const client = new MongoClient(url); //conection


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.get('/tasks', (req, res) => {
    db.collection('tasks').find().toArray((err, docs) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

app.get('/tasks/:id', (req, res) => {
    db.collection('tasks').findOne({_id: ObjectID(req.params.id)}, (err, docs) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
})

app.get('/services', (req, res) => {
    db.collection('services').find().toArray((err, docs) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

app.get('/services/:id', (req, res) => {
    db.collection('services').findOne({_id: ObjectID(req.params.id)}, (err, docs) => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
})

app.post('/tasks', (req, res) => {
    let tasks = {
        type: req.body.type, 
        dateCreating: "Mondey, Jun 26, 16:00", 
        taskText: "I need a plumber to unblock toilet", 
        dscription: "", 
        location: "" 
    }

    db.collection('tasks').insertOne(student, err => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(tasks);
    })
});

app.put('/tasks/:id', (req, res) => {
    db.collection('tasks').updateOne({_id: ObjectID(req.params.id)}, { $set: {name: req.body.name}}, err => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(student);
    });
    res.sendStatus(200);
});

app.delete('/tasks/:id', (req, res) => {
    db.collection('tasks').deleteOne({_id: ObjectID(req.params.id)}, err => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(student);
    });
    res.sendStatus(200);
})

client.connect(err => {
    console.log('Connection success');

    db = client.db(dbname); 

    app.listen(3333, () => console.log('Server running...'))
});