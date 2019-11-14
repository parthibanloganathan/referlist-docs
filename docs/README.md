# Getting started

Add Referlist to your landing page in less than 5 minutes

# Install manually in any HTML page

1. Add Referlist JavaScript snippet to your landing page

Copy and paste the below JavaScript snippet in the page where you collect your user's email address. Make sure to replace `NAME_OF_YOUR_DOMAIN` with the domain you entered in the Referlist setup page.

```
<script src="https://referlist.co/resources/referlist.js" type="text/javascript"></script>
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
  	window.referlist.initialize({ domain: "<NAME_OF_YOUR_DOMAIN>" });
  });
</script>
```

2. Add the following `id` to the input field and button where you collect emails

Add `id="referlistemail"` to the input field where the user enters their email and `id="referlistbutton"` to the button they click to sign up for your waitlist

For example

```
<input type="text" id="referlistemail" />
<input type="button" id="referlistbutton" value="Join waitlist"/>
```

# Install in React via npm

1. Install `referlist` via npm by running `npm install referlist --save`.

2. Import `referlist` in the page where you're collecting emails.
   `import referlist from "referlist";`

3. Initialize `referlist` with your domain in `componentDidMount` of the component where you're collecting signups.

```
  componentDidMount = () => {
    referlist.initialize({ domain: "NAME_OF_YOUR_DOMAIN" });
  };
```

Make sure to replace `NAME_OF_YOUR_DOMAIN` with the domain you entered in the Referlist setup page.

4. Add the following `id` to the input field and button where you collect emails

Add `id="referlistemail"` to the input field where the user enters their email and `id="referlistbutton"` to the button they click to sign up for your waitlist

For example

```
<input type="text" id="referlistemail" />
<input type="button" id="referlistbutton" value="Join waitlist"/>
```

Here's a sample component with the above pieces put together.

```
import React, { Component } from "react";
import referlist from "referlist";

class Signup extends Component {
  componentDidMount = () => {
    referlist.initialize({ domain: "<NAME_OF_YOUR_DOMAIN>" });
  };

  render() {
    return (
      <div>
        <input type="text" id="referlistemail" />
        <input type="button" id="referlistbutton" value="Join waitlist" />
      </div>
    );
  }
}

export default Signup;
```

# Install in Squarespace, Weebly, Wix, etc

Most website builders have a custom code block feature where you can inject your own HTML, CSS and JavaScript into your site. You can simply copy and paste the following code block to get a signup textbox and button for your waitlist. 

Let's take Squarespace as an exmaple. Use the [code block feature](https://support.squarespace.com/hc/en-us/articles/206543167). Note that adding code blocks with JavaScript is a premium feature in Squarespace that's only available in their Business and Commerce plans.

1. Open your website editor in Squarespace
2. Open up the relevant page where you'll collect emails in the Pages panel
3. Add a Code block
4. Copy and paste the below code where you want your signup form to be. Make sure to replace `NAME_OF_YOUR_DOMAIN` with the domain you entered in the Referlist setup page.

```
<script src="https://referlist.co/resources/referlist.js" type="text/javascript"></script>
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
  	window.referlist.initialize({ domain: "<NAME_OF_YOUR_DOMAIN>" });
  });
</script>
<input type="text" id="referlistemail" />
<input type="button" id="referlistbutton" value="Join waitlist" />
```

If you're having trouble integrating Referlist, email us at <support@referlist.co> and we'll do your best to help.