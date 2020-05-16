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
});

app.post('/services', (req, res) => {
    let service = {
        type: req.body.type, 
        tasks: req.body.tasks
    }

    db.collection('services').insertOne(service, err => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.send(service);
    })
});

app.post('/tasks', (req, res) => {
    let task = {
        typeOfService: req.body.typeOfService,
        taskOfService: req.body.taskOfService, 
        dateCreating: req.body.dateCreating, 
        taskText: req.body.taskText, 
        description: req.body.description, 
        location: req.body.location 
    }

    db.collection('tasks').insertOne(task, err => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});

app.put('/tasks/:id', (req, res) => {
    db.collection('tasks').updateOne({_id: ObjectID(req.params.id)}, { 
        $set: {typeOfService: req.body.typeOfService}, 
        $set: {taskOfService: req.body.taskOfService},
        $set: {dateCreating: req.body.dateCreating},
        $set: {taskText: req.body.taskText},
        $set: {description: req.body.description},
        $set: {location: req.body.location}
    }, err => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
    });
    res.sendStatus(200);
});

app.delete('/tasks/:id', (req, res) => {
    db.collection('tasks').deleteOne({_id: ObjectID(req.params.id)}, err => {
        if(err) {
            console.error(err);
            return res.sendStatus(500);
        }
    });
    res.sendStatus(200);
})

client.connect(err => {
    console.log('Connection success');

    db = client.db(dbname); 

    app.listen(3333, () => console.log('Server running...'))
});