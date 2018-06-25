const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require ('mongoose');

const app = express();

mongoose.connect('mongodb://graphql_ninja:graphql_ninja1@ds219051.mlab.com:19051/graphql_ninja')
mongoose.connection.once('open',()=>{
console.log('connected to db ');

})
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql :true
}) );
app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
