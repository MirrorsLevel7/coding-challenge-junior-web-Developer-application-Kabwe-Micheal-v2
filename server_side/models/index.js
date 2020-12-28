const mongoose = require('mongoose');

const CONNECTION_URL = 'mongodb+srv://code_challenge:code_challenge123@cluster0.wytli.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.set('debug', true);
//we connect our database

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('connected')
})
.catch((error)=>{
    console.log({message: error.message})
})
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

//we ask mongo to use promises so that we can use promise chains
mongoose.Promise = Promise;

module.exports.Product = require('./product');