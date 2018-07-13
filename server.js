// Server file 
import config from './config'
import http from "http";
import app from "./app.js";

//setting the port for server
const port = process.env.PORT || 3000;

//creating server using express app
const server = http.createServer(app);

// server listening to the requests.
server.listen(port, function(err) {
  if (err) {
    console.log("Error in starting server", err);
  }
  console.log(`Your App is Running on Port : ${port}`);
});

module.exports = server;