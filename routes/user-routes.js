import userController from '../controllers/user-controller';
import express from 'express';

// Creating router instance of express router 
const router = express.Router();

/* 
   Creating Routes for IOT Api
*/

// Route to get all users
router.route('/users')
  .get(userController.checkReservations);


export default router;