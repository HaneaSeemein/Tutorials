const assert = require('assert');
const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');
        // Query for a movie that has the title 'Back to the Future'
        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);
        console.log("connected");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);

const URL = 'mongodb://127.0.0.1:27017'; //Connection URL
const dbname = 'signincredentials'; //Database name
const clients = new MongoClient(URL);
clients.connect(function(err) {
        assert.equal(null, err);
        console.log("mongodb connection made");
        const db = clients.db(dbname);
        clients.close();
    })
    // const clients = new MongoClient(URL, { useNewUrlParser: true }); //if some deprecated warning