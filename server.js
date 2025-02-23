require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');


const baseurl = process.env.BASE_URL;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/bocker', async (req, res) => {
    try {
        const response = await axios.get(`${baseurl}/bocker`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from .NET API');
    }
});

app.post('/bocker', async (req, res) => {
    try {
        const response = await axios.post(`${baseurl}/bocker`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from .NET API');
    }
});

app.listen(PORT, (error) => {
    if (!error)
        console.log(`Server is Successfully Running, and App is listening on port ${PORT}`);
    else
        console.log("Error occurred, server can't start", error);
});