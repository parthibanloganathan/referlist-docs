# referlist
## SDK for Referlist

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

Please refer http://docs.referlist.co/#/?id=install-referlist-via-npm for more information

## Importing signups
To import signups from an existing waitlist, format your existing waitlist as a CSV with a column called `email`. We'll extract all emails from that column in the same order and add them to your Referlist waitlist.

## Exporting signups
### Mailchimp
1. In a project, click Setup and scroll down to Integrations
2. Click on Connect to Mailchimp
3. Authorize access to Mailchimp
4. Select the Mailchimp audience list you want to send signups to from the dropdown
5. Hit Save

### Airtable
1. Make sure your Airtable base has a table called "signups" and a column called "emails"
2. In a project, click Setup and scroll down to Integrations
3. Find your Airtable API Key by going to your Accounts page and enter it. [See instructions here](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-)
4. Find your Airtable Base ID by going to the Airtable API documentation and clicking on your base. [See instructions here](https://airtable.com/api)
5. Hit Save
