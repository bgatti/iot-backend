/*import Required modules*/
import express from 'express';
import bodyParser from 'body-parser';
import config from './config/';
import cors from 'cors';
import path from 'path';
import logger from 'morgan';
import compression from 'compression';

// import All routes  from routes folder 
import Routes from './routes';

// Create a new Express Instance
const app = express();

// compress all responses
app.use(compression());

// Cors middleware to handle request cross-origin 
app.use(cors());

//body-parser middleware to handle form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//morgan middle-ware to logs the requests.   
app.use(logger('dev'));

// Welcome Route for api 
app.get('/', function(req, res, next) {
  res.status(200).json({
    status: true,
    message: "Welcome to IOT API, Ready to Handle Requests..!!"
  });
});

// Api Routes For application 

app.use('/api', Routes.testRoutes);
app.use('/api', Routes.userRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error("No Matching Route Please Check Again...!!");
  err.status = 404;
  next(err);
});
// error handler 
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    Error: {
      message: err.message
    }
  });
});

module.exports = app;