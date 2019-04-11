// express was a web application server side framework 
const express = require("express");
require('./config/config');
// require('../config/config');
const port=process.env.PORT;
//This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP  request
const bodyParser=require('body-parser');
//This http variable contains a function called createServer. This is all you need to do to create an http server.
const http = require("http");
const swaggerUi=require('swagger-ui-express');

const app = express();


const swaggerDocument=require('./config/swagger.json');
const { empRouter } = require('./routes/emp.routes');

//for cors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    //to indicate which HTTP headers can be used during the actual request.
    res.setHeader(
      "Access-Control-Allow-Headers",
      //The header may list any number of headers, separated by commas.
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
  
    next();
  });
//basically tells the system that you want json to be used.
  app.use(bodyParser.json());

  // app.use(express.json());

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    explorer: true
  }));

  app.use("/api", empRouter);
  
// create node server which uses express
  const server = http.createServer(app);


  server.listen(port);
console.log("server listining");
