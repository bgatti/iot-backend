import { users,devices,userGroups,deviceGroups,reservations } from '../config/text';
const _ = require('lodash');

module.exports  = {
  /*
    @param userId,
    @param deviceId,
    @api /api/users?userId=&deviceId
  */
  checkReservations (req, res, next) {
    let userId = req.query.userId,
        deviceId = req.query.deviceId;

    if (userId && deviceId) {
      let data = findUser(userId),
          dev = findDevice(deviceId),
          ugroups = findUserGroups(userId),
          dgroups = findDeviceGroups(deviceId),
          reservation = findReservations(userId,deviceId);

      if (data && dev && dgroups.length && ugroups.length && reservation.length ) {
        res.status(200).json({
          statusCode: res.statusCode,
          permitted: true,
          userId,
          deviceId
       });
      } else {
         res.status(200).json({
          statusCode: res.statusCode,
          permitted: false,
          userId,
          deviceId
       });
      }
    } else {
      res.status(422).json({
        statusCode: res.statusCode,
        message: "userId, deviceId are required"
      });
    }
  }
}


// check the user
function findUser(id){
 let user =  _.find(users, function(u) { return u.id == id; });
 return user;
}

// check all the groups associated with the user-id 
function findUserGroups(id){
  let uGroup = userGroups.filter(g => { return g.user_id == id });
  return uGroup;
}

// check the device 
function findDevice(id){
  let device = _.find(devices, function(d) { return d.id == id; });
  return device;
}

// check all the groups associated with the device-id 
function findDeviceGroups(id){
 let dGroup = deviceGroups.filter(dg => { return dg.device_id == id });
  return dGroup;
}

// check all the reservations associated with the device-id and user-id
function findReservations(u_id,d_id){
 let reservation = reservations.filter(rv => { return rv.device_id == d_id && rv.user_id == u_id });
  return reservation;
}