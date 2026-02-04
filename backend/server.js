
const express = require('express');
const { connectToDatabase } = require('./db');

const app = express();
connectToDatabase();

app.get(  "/", (req, res) => {
        res. send("express + mssql connected");
    }
);

app.listen(3000, () => console.log('Server is running on port 3000'));

//encryp passwords and save login info
const bcrypt = require('bcrypt');

app.post('/api/register', async (req, res) => {
    const { password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    // save hashedPassword to DB
});