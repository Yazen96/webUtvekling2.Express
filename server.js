require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const baseurl = process.env.BASE_URL;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve index.html at the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve books.html at the /books route
app.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname, 'books.html'));
});

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

app.put('/bocker', async (req, res) => {
    try {
        const response = await axios.put(`${baseurl}/bocker`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from .NET API');
    }
});


app.delete('/bocker', async (req, res) => {
    try {
        const response = await axios.delete(`${baseurl}/bocker`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from .NET API');
    }
});



app.get('/bocker/:id', async (req, res) => {
    try {
        const response = await axios.get(`${baseurl}/bocker/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from .NET API');
    }
});

app.put('/bocker/:id', async (req, res) => {   
    try {
        const response = await axios.put(`${baseurl}/bocker/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from .NET API');
    }
});

app.delete('/bocker/:id', async (req, res) => {
    try {
        const response = await axios.delete(`${baseurl}/bocker/${req.params.id}`);
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