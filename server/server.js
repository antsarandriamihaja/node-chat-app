const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const port = process.engv.PORT || 3000;
var app = express();

//config middleware
app.use(express.static(publicPath));

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})