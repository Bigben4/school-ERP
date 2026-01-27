
const express = require('express');
const { connectToDatabase } = require('./db');

const app = express();
connectToDatabase();

app.get(  "/", (req, res) => {
        res. send("express + mssql connected");
    }
);

app.listen(3000, () => console.log('Server is running on port 3000'));

