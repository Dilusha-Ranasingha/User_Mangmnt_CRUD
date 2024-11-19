const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');


app.use(cors());    // cors middleware , this bolck the corss origin resource sharing policy
app.use(            //request responce handling middleware
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());   //request respons data , convert to json middleware





//create API - retrive all users
app.get('/users', (req, res) => {
    controller.getUsers((req, res, next) => {
        res.send();
    });
});

//create API - radd user
app.post('/createuser', (req, res) => {
    controller.addUser(req.body, (callback) => {
        res.send();
    });
});

//create API - update user
app.post('/updateuser', (req, res) => {
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    });
});

//create API - delete user
app.post('/deleteuser', (req, res) => {
    controller.deleteUser(req.query, (callback) => {
        res.send(callback);
    });
});


module.exports = app;