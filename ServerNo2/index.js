const express = require('express');

const app = express();

const port  = process.env.PORT || 4001

app.get('/',(req,res)=>{
    res.send('working server 2')
});

app.listen(port,()=>console.log("working on port : "+port));