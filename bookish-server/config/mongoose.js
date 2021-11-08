const mongoose = require('mongoose');
const url = `mongodb://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@dvcluster01-shard-00-00.ezst9.mongodb.net:27017,dvcluster01-shard-00-01.ezst9.mongodb.net:27017,dvcluster01-shard-00-02.ezst9.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-8j8fnc-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to database!"));
db.once('open', () => {
    console.log("Database connection successful");
})

module.exports = db;