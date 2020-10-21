(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var sdk = require("./utils/sdk");
window.referlist = sdk;
module.exports = sdk;

},{"./utils/sdk":2}],2:[function(require,module,exports){
(function () {
  function initialize(waitlistdetails) {
    var domain = waitlistdetails.domain;
    var emailId = waitlistdetails.emailId;
    var buttonId = waitlistdetails.buttonId;

    var referListEmailId = "referlistemail";
    var referListButtonId = "referlistbutton";

    if (emailId && buttonId) {
      referListEmailId = emailId;
      referListButtonId = buttonId;
    }

    let referlistButton = document.getElementById(referListButtonId);
    let emailField = document.getElementById(referListEmailId);

    if (referlistButton && emailField) {
      referlistButton.addEventListener("click", function () {
        var email = emailField.value;
        if (validateEmail(email)) {
          var ref = null;

          var queryString =
            parent !== window
              ? window.parent.location.search
              : window.location.search;

          if (
            queryString !== null &&
            queryString !== undefined &&
            queryString !== ""
          ) {
            var queryParam = parseQuery(queryString);
            if (queryParam.ref !== undefined) {
              ref = queryParam.ref;
            }
          }

          let url =
            "https://referlist.co/joinwaitlist/" +
            domain +
            "?email=" +
            encodeURIComponent(email);

          if (ref) {
            url = url + "&ref=" + ref;
          }

          window.open(url, "_parent");
        } else {
          window.alert("Please enter a valid email address");
        }
      });
    } else {
      throw new Error(
        "Create a text field with id set to 'referlistemail' and associated button with id set to `referlistbutton` or provide emailId and buttonId as ids of the field and button you want to use in the referlist.initialize method"
      );
    }
  }

  function addToWaitlist(domain, email, ref = null) {
    // Attempt to extract referral code if not present
    if (!ref) {
      var queryString =
        parent !== window
          ? window.parent.location.search
          : window.location.search;

      if (
        queryString !== null &&
        queryString !== undefined &&
        queryString !== ""
      ) {
        var queryParam = parseQuery(queryString);
        if (queryParam.ref !== undefined) {
          ref = queryParam.ref;
        }
      }
    }

    let url =
      "https://referlist.co/joinwaitlist/" +
      domain +
      "?email=" +
      encodeURIComponent(email);

    if (ref) {
      url = url + "&ref=" + ref;
    }

    window.open(url, "_parent");
  }

  function validateEmail(email) {
    const regexp = /\S+@\S+\.\S+/;
    return regexp.test(email);
  }

  function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === "?"
      ? queryString.substr(1)
      : queryString
    ).split("&");
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
  }

  module.exports = {
    initialize: initialize,
    addToWaitlist: addToWaitlist
  };
})();

},{}]},{},[1]);
