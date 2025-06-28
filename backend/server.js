const express = require("express");
const dotenv =  require("dotenv");
const cors = require('cors');

dotenv.config()
const app = express();

const {connectToMongoDb} = require('./connect')
const authRouting = require('./routes/authRoutes')

const URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000

//MongoDb Connection
connectToMongoDb(URI)
.then(()=> console.log("Connection to MongoDB Successfull"))
.catch((err)=> console.log(`error in connecting MongoDb: ${err}`))


app.use(cors());
app.use(express.json());

//Routing 
app.use('/api/auth', authRouting)


app.listen(PORT, ()=> console.log("server started on port:",PORT));



