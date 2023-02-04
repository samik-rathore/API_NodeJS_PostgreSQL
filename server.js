const express = require("express");
const bankRoutes = require('./src/routes');
require('dotenv').config();

const app = express();
const port = 3000;

app.use('/api/bank',bankRoutes);

app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})