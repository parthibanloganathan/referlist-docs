# Getting started

Add Referlist to your landing page in less than 5 minutes

1. Login to [Referlist](https://referlist.co) and click Create a waitlist
2. In the Setup tab, fill out the Required section. You need to choose a domain, enter your company's name and your website URL that contains your sign up form. To further customize your waitlist page, you can fill out the rest of the sections in Setup.
3. Click Preview to see your waitlist page in a new tab. If everything looks good, hit Save.

Now it's time to install Referlist code on your site. There are three ways you can do this:
1. Copy and paste an embedded sign up form and get a styled Join waitlist text box and button. Great to use on landing page builders. No code required
2. Use our [npm module](https://www.npmjs.com/package/referlist) to add Referlist to your React app
3. Copy and paste a Javascript snippet and add ids to the right elements on your website

Pick whichever suits your needs best. If we don't support an installation method that you need, just email us at <support@referlist.co> and we'll get on it.

# Install embedded sign up form in a website builder like Squarespace, Webflow, Wix, etc - you write 0 lines of code

Most website builders have a custom code block feature where you can inject your own HTML, CSS and JavaScript into your site. You can simply copy and paste the following code block to get a styled signup textbox and button for your waitlist.

Links to code embed help center articles for on popular website builders:
1. [Squarespace](https://support.squarespace.com/hc/en-us/articles/206543167)
2. [Webflow](https://university.webflow.com/article/embed)
3. [Wix](https://support.wix.com/en/article/embedding-custom-code-to-your-site)
5. [Weebly](https://www.weebly.com/app/help/us/en/topics/create-widgets-embed-code-and-add-external-content)

Let's take Squarespace as an example. Note that adding code blocks with JavaScript is a premium feature in Squarespace that's only available in their Business and Commerce plans.

1. Open your website editor in Squarespace
2. Open up the relevant page where you'll collect emails in the Pages panel
3. Add a Code block
4. Copy and paste the below code where you want your signup form to be. Make sure to replace `NAME_OF_YOUR_DOMAIN` with the domain you entered in the Referlist setup page. You can also get this code snippet from the Referlist Setup page once you hit Save.
5. You can edit the CSS below to change the style of the input field and button

```
<!-- Begin referlist signup form -->
  <style>
    .referlistcontainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    #referlistemail {
      width: 250px;
      margin-right: 10px;
      height: 45px;
      border-radius: 32px;
      border-color: black;
      font-size: 16px;
      padding-left: 10px;
    }
    #referlistbutton {
      width: 150px;
      height: 45px;
      border: none;
      border-radius: 32px;
      font-size: 16px;
      background-color: black;
      color: white;
    }
    .referlistinnercontainer {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-bottom: 60px;
      padding-top: 60px;
    }
  </style>
  
  <div class="referlistcontainer">
    <div class="referlistinnercontainer">
      <input
        type="text"
        id="referlistemail"
        placeholder="email@yourcompany.com"
      />
      <input type="button" id="referlistbutton" value="Join waitlist" />
    </div>
  </div>
  
  <script src="https://referlist.co/resources/referlist.js"
    type="text/javascript"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function(event) {
      window.referlist.initialize({ domain: 'myproject' });
    });
  </script>
  <!-- End referlist signup form -->
  ```

# Install in React via npm

1. Install `referlist` via npm by running `npm install referlist --save` in your React app.

2. Import `referlist` in the page where you're collecting emails.
   `import referlist from "referlist";`

3. Initialize `referlist` with your domain in `componentDidMount` of the component where you're collecting signups.

```
  componentDidMount = () => {
    referlist.initialize({ domain: 'NAME_OF_YOUR_DOMAIN' });
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
    referlist.initialize({ domain: 'NAME_OF_YOUR_DOMAIN' });
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

# Install manually in any HTML page

1. Add Referlist JavaScript snippet to your landing page

Copy and paste the below JavaScript snippet in the page where you collect your user's email address. Make sure to replace `NAME_OF_YOUR_DOMAIN` with the domain you entered in the Referlist setup page.

```
  <script src="https://referlist.co/resources/referlist.js"
    type="text/javascript"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function(event) {
      window.referlist.initialize({ domain: 'NAME_OF_YOUR_DOMAIN' });
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

## Multiple sign up forms
If you want to add multiple sign-up fields to a single page on your site, call `referlist.initialize` with the following parameters: `emailId` and `buttonId`.

For example, call `referlist.initialize({ domain: NAME_OF_YOUR_DOMAIN, emailId: ID_OF_EMAIL_FIELD, buttonId: ID_OF_BUTTON_FIELD})` where `ID_OF_EMAIL_FIELD` is the id of the second field where you want to collect the email address and `ID_OF_BUTTON_FIELD` is the id of the second button which signs up your user.

You can repeat this for as many fields and button as you want. Just provide the ids of them so that the Referlist SDK knows where to get the email from and what button click to listen to.

Here is a code sample:

```
<input type="text" id="referlistemail" />
<input type="button" id="referlistbutton" value="Join waitlist"/>

// .... somewhere down in the same page

<input type="text" id="ID_OF_EMAIL_FIELD" />
<input type="button" id="ID_OF_BUTTON_FIELD" value="Join waitlist"/>

  <div class="referlistcontainer">
    <div class="referlistinnercontainer">
      <input
        type="text"
        id="referlistemail"
        placeholder="email@yourcompany.com"
      />
      <input type="button" id="referlistbutton" value="Join waitlist" />
    </div>
    ....
    ....
    ....
    <input type="text" id="secondemailfield" />
    <input type="button" id="secondbutton" value="Join waitlist"/>
  </div>
  
  <script src="https://referlist.co/resources/referlist.js"
    type="text/javascript"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function(event) {
      window.referlist.initialize({ domain: 'myproject' }); // this will setup the first field
      window.referlist.initialize({ domain: 'myproject', emailId: 'secondemailfield', buttonId: 'secondbutton' }); // this will setup the second field
    });
  </script>
```