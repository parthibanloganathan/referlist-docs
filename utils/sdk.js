(function () {
  function initialize(waitlistdetails) {
    var domain = waitlistdetails.domain;
    var emailId = waitlistdetails.emailId;
    var buttonId = waitlistdetails.buttonId;

    var referlistEmailId = "referlistemail";
    var referlistButtonId = "referlistbutton";
    var referlistFormId = "referlistform";

    if (emailId && buttonId) {
      referlistEmailId = emailId;
      referlistButtonId = buttonId;
    }

    let referlistButton = document.getElementById(referlistButtonId);
    let referlistEmailField = document.getElementById(referlistEmailId);
    let referlistForm = document.getElementById(referlistFormId);

    let emailSubmittedThroughButton = function () {
      var email = referlistEmailField.value;
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
    };

    let emailSubmittedThroughForm = function (event) {
      emailSubmittedThroughButton();
      event.preventDefault();
    };

    if (referlistForm && referlistEmailField) {
      referlistForm.addEventListener("submit", emailSubmittedThroughForm);
    }

    if (referlistButton && referlistEmailField) {
      referlistButton.addEventListener("click", emailSubmittedThroughButton);
    }
    
    if (!referlistEmailField) {
      throw new Error(
        "Create a text field with id set to 'referlistemail' and associated button with id set to `referlistbutton` or in a form with id `referlistform`. You can also provide emailId and buttonId as ids of the field and button you want to use in the referlist.initialize method"
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
