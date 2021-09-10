# Getting started

Add Referlist to your landing page in less than 5 minutes

1. Login to [Referlist](https://referlist.co) and click Create a waitlist
2. In the Setup tab, fill out the Required section. You need to choose a domain, enter your company's name and your website URL that contains your sign up form. To further customize your waitlist page, you can fill out the rest of the sections in Setup.
3. Click Preview to see your waitlist page in a new tab. If everything looks good, hit Save.

Now it's time to install Referlist code on your site. There are five ways you can do this in order of least to most custom:

1. Copy and paste an embedded sign up form and get a styled Join waitlist text box and button. No code required
2. Use our [npm module](https://www.npmjs.com/package/referlist) to add Referlist to your React or NextJS app
3. Copy and paste a Javascript snippet and add ids to the right elements on your website
4. Copy and paste a Javascript snippet and manually make a call to add a user to the waitlist
5. Add email signups [via our API](https://docs.referlist.co/#/?id=api)

Pick whichever suits your needs best. If we don't support an installation method that you need, just email us at <support@referlist.co> and we'll help.

# Install embedded sign up form in a website builder like Squarespace, Webflow, Wix, etc - you write 0 lines of code

Most website builders have a custom code block feature where you can inject your own HTML, CSS and JavaScript into your site. You can simply copy and paste the following code block to get a styled signup textbox and button for your waitlist. Some of them make this a paid feature though.

Links to code embed help center articles for on popular website builders:

1. [Squarespace](https://support.squarespace.com/hc/en-us/articles/206543167) (you need to be on a Business or Commerce plan)
2. [Webflow](https://university.webflow.com/article/embed)
3. [Wix](https://support.wix.com/en/article/wix-editor-using-iframes-to-display-visible-content-on-your-site) (click on Embeds > Embed a site and enter the Referlist code. Requires Wix Premium plan)
4. [Weebly](https://www.weebly.com/app/help/us/en/topics/create-widgets-embed-code-and-add-external-content)

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

  <form id="referlistform" class="referlistcontainer">
    <div class="referlistinnercontainer">
      <input
        type="text"
        id="referlistemail"
        placeholder="email@yourcompany.com"
      />
      <input type="button" id="referlistbutton" value="Join waitlist" />
    </div>
  </form>

  <script src="https://referlist.co/resources/referlist.js"
    type="text/javascript"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function(event) {
      window.referlist.initialize({ domain: 'myproject' });
    });
  </script>
  <!-- End referlist signup form -->
```

# Install in React or NextJS via npm

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

If you're fancy and use function components and hooks, initialize Referlist in a `useEffect` function that runs once on mount like so:

```
  useEffect(() => {
    referlist.initialize({ domain: 'NAME_OF_YOUR_DOMAIN' });
  }, []);
```

If you're using NextJS, note that this library accesses the `window` object and needs to run client-side. Use dynamic imports to get around this. You can read more in this [closed issue](https://github.com/parthibanloganathan/referlist-sdk/issues/4).

```
  const Referlist = dynamic(
    () =>
      import("referlist").then((referlist) =>
        referlist.initialize({ domain: "NAME_OF_YOUR_DOMAIN" })
      ),
    { ssr: false }
  );
```

and then render `<Referlist />` in your function body.

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

and here it is with hooks

```
import React, { Component } from "react";
import referlist from "referlist";

function Signup{
  useEffect(() => {
    referlist.initialize({ domain: 'NAME_OF_YOUR_DOMAIN' });
  }, []);

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

and here it is with NextJS

```
import dynamic from "next/dynamic";

export default function Home() {
  const Referlist = dynamic(
    () =>
      import("referlist").then((referlist) =>
        referlist.initialize({ domain: "NAME_OF_YOUR_DOMAIN" })
      ),
    { ssr: false }
  );

  return (
    <div className="container">
      <Referlist />
      <div>
        <input type="text" id="referlistemail" />
        <input type="button" id="referlistbutton" value="Join waitlist" />
      </div>
    </div>
  );
}
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

If you want to add multiple signup fields to a single page on your site, call `referlist.initialize` with the following parameters: `emailId` and `buttonId`.

For example, call `referlist.initialize({ domain: NAME_OF_YOUR_DOMAIN, emailId: ID_OF_EMAIL_FIELD, buttonId: ID_OF_BUTTON_FIELD})` where `ID_OF_EMAIL_FIELD` is the id of the second field where you want to collect the email address and `ID_OF_BUTTON_FIELD` is the id of the second button which signs up your user.

You can repeat this for as many fields and button as you want. Just provide the ids of them so that the Referlist SDK knows where to get the email from and what button click to listen to.

Here is a code sample:

```
<input type="text" id="referlistemail" />
<input type="button" id="referlistbutton" value="Join waitlist"/>

// .... somewhere down in the same page

<input type="text" id="secondemailfield" />
<input type="button" id="secondbutton" value="Join waitlist"/>

<input type="text" id="thirdemailfield" />
<input type="button" id="thirdbutton" value="Join waitlist"/>


<script src="https://referlist.co/resources/referlist.js" type="text/javascript"></script>

<script>
document.addEventListener("DOMContentLoaded", function(event) {
  window.referlist.initialize({ domain: 'myproject' }); // this will setup the first field
  window.referlist.initialize({ domain: 'myproject', emailId: 'secondemailfield', buttonId: 'secondbutton' }); // this will setup the second field
  window.referlist.initialize({ domain: 'myproject', emailId: 'thirdemailfield', buttonId: 'thirdbutton' }); // this will setup the third field
});
</script>
```

# Call function to add to waitlist

You can also manually call a function `addToWaitlist` to add an email to the waitlist. It's signature is:
`addToWaitlist(domain, email, referralCode)`
where
`domain` is the name your domain, `email` is the email of the person you want to add to your waitlist and `referralCode` is the referral code of the person who referred them. It's optional. If `referralCode` isn't provided, it'll try to read it from the URL.

```
  <script src="https://referlist.co/resources/referlist.js"
    type="text/javascript"></script>
  <script>

  <script>
    document.addEventListener("DOMContentLoaded", function (event) {
      window.referlist.addToWaitlist('NAME_OF_YOUR_DOMAIN', 'EMAIL_TO_ADD_TO_WAITLIST', 'REFERRAL_CODE');
    });
  </script>
```

# Importing signups

To import signups from an existing waitlist, format your existing waitlist as a CSV with a column called `email`. We'll extract all emails from that column in the same order and add them to your Referlist waitlist.

# Exporting signups

## Mailchimp

1. In a project, click Setup and scroll down to Integrations
2. Click on Connect to Mailchimp
3. Authorize access to Mailchimp
4. Select the Mailchimp audience list you want to send signups to from the dropdown
5. Hit Save

## Airtable

1. Make sure your Airtable base has a table called "signups" and a column called "emails"
2. In a project, click Setup and scroll down to Integrations
3. Find your Airtable API Key by going to your Accounts page and enter it. [See instructions here](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-)
4. Find your Airtable Base ID by going to the Airtable API documentation and clicking on your base. [See instructions here](https://airtable.com/api)
5. Hit Save

# API

With our waitlist API, you can add email signups, query for more info on a particular email and list all emails in your list. You can find your API key in Setup. Include it in the header under the field `api-key` in all your calls.

<!-- tabs:end -->
## Add a signup

`POST` Add a signup

`https://referlist.co/external/addsignup`

<!-- tabs:start -->

#### ** Request **

**Headers**

| Name    | Type   | Description                      | Required |
| ------- | ------ | -------------------------------- | -------- |
| api-key | string | Your API key from the setup page | `true`   |

**Body Parameters**

| Name         | Type   | Description                                           | Required |
| ------------ | ------ | ----------------------------------------------------- | -------- |
| email        | string | Email of person you want to signup                    | `true`   |
| referralCode | string | Referral code of the person who referred this signup  | `false`  |
| verify       | bool   | Whether to send a verification email or not           | `false`  |

#### ** Response **

**200: OK**

```
{
    "referralCode": "yfacn6WCe",
    "position": 4550,
    "alreadyAdded": true
}
```

<!-- tabs:end -->
## Lookup a signup

`POST` Get more information on a signup. If signup isn't verified, you will receive an active verification link too.

`https://referlist.co/external/getsignupinfo`

<!-- tabs:start -->

#### ** Request **

**Headers**

| Name    | Type   | Description                      | Required |
| ------- | ------ | -------------------------------- | -------- |
| api-key | string | Your API key from the setup page | `true`   |

**Body Parameters**

| Name  | Type   | Description                         | Required |
| ----- | ------ | ----------------------------------- | -------- |
| email | string | Email of person you want to signup  | `true`   |

#### ** Response **

**200: OK**

```
{
    "email": "alice@gmail.com",
    "verified": false,
    "points": 8,
    "referralCode": "yfacn6WCe",
    "referralSource": "alexander@gmail.com",
    "referralPageLink": "https://yourcompany.com/joinwaitlist/referlist?email=abc%40gmail.com",
    "verificationLink": "https://referlist.co/verify/?token=918e060989100c20364e56eb6cbc6dfb",
    "position": 1432,
    "referredEmailsAnonymized": [
        "j****e@gmail.com"
    ],
    "referredEmails": [
        "janice@gmail.com"
    ]
}
```

<!-- tabs:end -->
## List all signups

`POST` List signups

`https://referlist.co/external/getsignups`

<!-- tabs:start -->

#### ** Request **

**Headers**

| Name    | Type   | Description                      | Required |
| ------- | ------ | -------------------------------- | -------- |
| api-key | string | Your API key from the setup page | `true`   |

**Body Parameters**

`none`

#### ** Response **

**200: OK**

```
{
    "signups": [
        {
            "email": "alice@gmail.com",
            "verified": false,
            "points": 5,
            "referralCode": "yfacn6WCe"
        },
        {
            "email": "bob@gmail.com",
            "verified": true,
            "points": 1,
            "referralCode": "K7rSyNoBP"
        },
        ...
    ]
}
```

<!-- tabs:end -->