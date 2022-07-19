const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./user-model")
const app = express();
const PORT = 3000;
const mongoURL = "mongodb+srv://OleksiiDvornik:SmokiMo1603@project0.m1lo9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {}, () => {
        console.log('DB is online')
    })

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Dev started at port: ${PORT}`)
});

app.get('/', (req, res) => {
    res.send(`It's empty page`);
});

app.get('/users', (req, res) => {
    UserModel.find().then(response => res.send(response));
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findOne({_id: id}).then(response => res.send(response));
});

app.post('/users', (req, res) => {
    const user = new UserModel(req.body);
    user.save()
        .then(response => res.send(response))
        .catch(err => res.status(400).send(err));
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const currentDate = new Date();
    UserModel.updateOne({_id: id}, {...user, updateDate: currentDate})
        .then(response => UserModel.findById(id))
        .then(response => res.send(response));
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    UserModel.deleteOne({_id: id}).then(response => res.send(response));
});
