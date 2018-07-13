let test = {
  /*
    @param userId,
    @param deviceId,
    @api /api/test,
    @Cheks the ramdom number,
    if greater then 0.5 ? true : false 
  */
  test(req, res, next) {
    let userId = req.query.userId,
      deviceId = req.query.deviceId;
    if (userId && deviceId) {
      let random = Math.random();
      if (random > 0.5) {
        res.status(200).json({
          statusCode: res.statusCode,
          message: "Just Checking The Random Number > 0.5 or not",
          data: random,
          response: true
        });
      } else {
        res.status(200).json({
          statusCode: res.statusCode,
          message: "Just Checking The Random Number > 0.5 or not",
          data: random,
          response: false
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

export default test;