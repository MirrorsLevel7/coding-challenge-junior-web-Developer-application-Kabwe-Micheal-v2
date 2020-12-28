//we initialise express
const express = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors');

//we make an instance of express
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


const productRoutes = require('./routes/productRoutes');


app.get('/', (req, res)=>{
    res.send('hello i am working!')
})


app.use('/api/products', productRoutes);





app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})