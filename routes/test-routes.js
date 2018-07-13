import testController from '../controllers/test-controller';
import express from 'express';

// Creating router instance of express router 
const router = express.Router();

/* 
   Creating Routes for IOT Api
*/

// Route to get check true or false
router.route('/test')
  .get(testController.test);
  

export default router;