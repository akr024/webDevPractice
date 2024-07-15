require('dotenv').config({path: '../.env'});

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/users');
const mongoURI = `mongodb+srv://akr:${process.env.mongoPass}@practicedb.ykiyd9r.mongodb.net/webDevPractice?retryWrites=true&w=majority&appName=PracticeDB`

mongoose.connect(mongoURI);

app.get('/getUsers', async (req, res) => {
    try{
        const result = await UserModel.find({});
        res.json(result);
    } catch (err){
        res.json(err);
    }
})

app.listen(3001, () => {
    console.log("Server running!");
})

