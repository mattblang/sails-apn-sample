/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var apn = require('apn');

module.exports = {

	foo: function(req, res) {
        var deviceToken = "insert token here";
        var device = new apn.Device(deviceToken);

        var note = new apn.Notification();
        note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
        note.badge = 3;
        note.sound = "ping.aiff";
        note.alert = "\uD83D\uDCE7 \u2709 You have a new message";
        note.payload = {'messageFrom': 'Caroline'};

        sails.apnConnection.pushNotification(note, device);
    }
};

