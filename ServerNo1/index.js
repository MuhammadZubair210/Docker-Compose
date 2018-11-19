const express = require('express');

const app = express();

const port  = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send('working server 1')
});

app.listen(port,()=>console.log("working on port : "+port));