const mongoose = require("mongoose");

async function connectToMongoDb(URI){
    return mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = {
    connectToMongoDb,
}
