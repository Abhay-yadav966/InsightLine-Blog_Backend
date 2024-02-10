
const mongoose = require("mongoose");

require("dotenv").config();

function connectDB() {
    mongoose.connect( process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then( () => { console.log("Database connect successfully") } )
    .catch( (err) => {
        console.log("Unable to connect Server");
        console.error(err.message);
        process.exit(1);
    });
}

module.exports = connectDB;