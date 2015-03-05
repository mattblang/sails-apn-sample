# Instructions

1. Check out project

2. Add cert.pem and key.pem to root folder

3. Add device token to `/api/controllers/TestController.js`

3. Start server with `node app.js`

# Important pieces

* `/config/bootstrap.js` -- configures and starts the connection with APNs and adds the connection object to the [sails app object](http://sailsjs.org/#!/documentation/concepts/Globals?q=overview)
* `/api/controllers/TestController.js` -- contains a web service endpoint `/test/foo` that attempts to send a notification with `pushNotification()`
