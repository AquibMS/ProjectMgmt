const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

const app = express();

//connect to databse
connectDB();

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development' //since in env file we have set as development which is true, else if it is written as production then it is false condition, hence then skip this line.
    })
)

app.listen(port, console.log('Server running on port ${port}'));