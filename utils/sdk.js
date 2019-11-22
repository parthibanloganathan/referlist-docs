(function() {
  function initialize(waitlistdetails) {
    domain = waitlistdetails.domain;

    let referlistButton = document.getElementById("referlistbutton");
    let emailField = document.getElementById("referlistemail");
    if (referlistButton && emailField) {
      referlistButton.addEventListener("click", function() {
        var email = emailField.value;
        if (validateEmail(email)) {
          var ref = null;
          var queryString = window.location.search;
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
            "https://referlist.co/joinwaitlist/" + domain + "?email=" + email;

          // let url =
            // "http://localhost:3000/joinwaitlist/" + domain + "?email=" + email;

          if (ref) {
            url = url + "&ref=" + ref;
          }

          window.open(url, "_self");
        } else {
          alert("Please enter a valid email address");
        }
      });
    } else {
      throw new Error(
        "Create a text field with id set to 'referlistemail' and associated button with id set to `referlistbutton`"
      );
    }
  }

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
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
    initialize: initialize
  };
})();
