'use strict';

var sesForwarder = require('aws-lambda-ses-forwarder')

module.exports.sesForwarder = function (evt, ctx) {
  // Configure the S3 bucket and key prefix for stored raw emails, and the
  // mapping of email addresses to forward from and to.
  //
  // Expected keys/values:
  // - fromEmail: Forwarded emails will come from this verified address
  // - emailBucket: S3 bucket name where SES stores emails.
  // - emailKeyPrefix: S3 key name prefix where SES stores email. Include the
  //   trailing slash.
  // - forwardMapping: Object where the key is the email address from which to
  //   forward and the value is an array of email addresses to which to send the
  //   message.
  var overrides = {
    config: {
      fromEmail: "noreply@habd.as",
      emailBucket: "habd.as-ses-email",
      emailKeyPrefix: "",
      forwardMapping: {
        "@habd.as": [
          "jhabdas@gmail.com"
        ]
      }
    }
  };
  sesForwarder.handler(evt, ctx, overrides);
}
