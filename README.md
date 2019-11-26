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