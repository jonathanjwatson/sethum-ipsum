const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//need to store different quotes
//array of strings
let randomQuotes = [
    "Instructions are not asynchronous",
    "No Firewall = Butt Ass Open",
    "There is no crying in coding",
    "BLESS you",
    "I am a Jelly Bean",
    "There are no liferafts in bootcamp.",
    "You seem a little lost",
]

//routes

// /api/quotes
// returns a collection of quotes
// GET

app.get('/api/quotes', function(req, res) {
    return res.json(randomQuotes);
});

// /api/quotes/random
// returns a single random quote
// GET

// /api/quotes
// adds a new quote to the collection of quotes
// POST
// returns entire collection of quotes with new quote added

app.post('/api/quotes', function(req, res) {
    const newQuote = req.body.new;
    // console.log(newQuote);
    // randomQuotes.push(newQuote);
    //OPTION 1 - fs.appendFile
    //OPTION 2 - SQL
    // require mysql
    // setup the config for the instance
    // write an insert query
    // select * from query
    // res.json the select query results


    return res.json(randomQuotes);
});









app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT)
});