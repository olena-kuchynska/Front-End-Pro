/* Создайте приложение на node.js. При корневом get запросе сервер отдает разметку с кнопкой и блоком. 
При нажатии на кнопку отправляется get запрос на api https://jsonplaceholder.typicode.com/users и ,получив ответ, отрисовывается в блоке. 
Пояснение: разметка html находится на сервере. По корневому запросу / с клиента, считывается и отдается на кдиент, который ее рендерит. */

const path = require('path');
const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/js/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'js', 'script.js'));
});

app.get('/styles/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'styles', 'styles.css'));
});

app.get('/users', (req, res) => {
    request('https://jsonplaceholder.typicode.com/users', (err, respons, body) => {
    if (err) return new Error(err);
    return res.send(body);
  });
});

app.listen(3000, () => console.log('Server running...'));