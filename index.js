// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

app.use(express.static('public'))


const PORT = 2020;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.send(pets); // Sending the pets array as the response

});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const petName = req.params.name;


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === petName);

    // send the pet as a response
    // if (pet) {
        res.send(pet);
    // } else {
    //     res.status(404).send('Pet not found');
    // }
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const owner = req.query.owner;

    // if the owner name is not provided, send a 400 Bad Request error
    if (!owner) {
        return res.status(400).send('Owner name is missing');
    }

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // if the pet is found, send it as a response
    if (pet) {
        res.json(pet);
    } else {
        // if the pet is not found, send a 404 Not Found error
        res.status(404).send('Pet not found for the given owner');
    }

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;