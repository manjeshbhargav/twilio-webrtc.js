'use strict';

// NOTE(mroberts): Print out adapter.js information if we are running with
// adapter.js enabled.
if (typeof adapter !== 'undefined') {
  console.log(adapter);
}

// NOTE(mmalavalli): Print out RTCRtpSender information if we are running with
// RTCRtpSender enabled.
if (typeof RTCRtpSender !== 'undefined') {
  console.log(RTCRtpSender);
}

require('./spec/rtcpeerconnection');
require('./spec/rtcsessiondescription');
