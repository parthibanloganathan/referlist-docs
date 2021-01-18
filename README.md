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

Please refer http://docs.referlist.co/#/?id=install-referlist-via-npm for more information