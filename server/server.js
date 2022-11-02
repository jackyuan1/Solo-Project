const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const stocksRouter = require('./routes/stocks.js')

// parses request body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//renders html in root
app.get('/api', (req,res)=>{
   return res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.use('/api/stocks', stocksRouter)

app.get('/hi', (req,res)=> {
    return res.status(200).json({hi:'hiiii'});
})

app.use('*', (req,res)=>{
    return res.sendStatus(404);
})

app.use((err, req, res, next)=> {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' } 
      };
      const errorObj = Object.assign(defaultErr, err);
      console.log(' YA DUN GOOFED: ', errorObj.log);
      console.log('Actual file error: ', err)
      const errorStatus = errorObj.status || 500;
      return res.status(errorStatus).json(errorObj.message);
})

app.listen(PORT, ()=>{console.log(`Listening on port: ${PORT}...`)})

module.exports = app;