const express = require('express');
const mongoose = require('mongoose');

const app = express();
const authRouter = require('./routes/auth');

app.use(express.json());
app.use(authRouter);

const port = 3000;

const Db = "mongodb+srv://vikas:Vikas%4004@cluster0.evofsox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(Db).then(() => {       
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('MongoDB connection error:', err);
});

app.listen(port, "0.0.0.0",() => {
    console.log(`Server is running on http://localhost:${port}`);
});
