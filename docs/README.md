# Getting started

Add Referlist to your landing page in two steps

# Install Referlist manually

1. Add JavaScript snippet to your landing page

Copy and paste the below JavaScript snippet in the page where you collect your user's email address. Make sure to replace `NAME_OF_YOUR_DOMAIN` with the domain you entered in the Referlist setup page.

```
<script src="bundle.js" type="text/javascript"></script>
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
  	window.referlist.initialize({ domain: "<NAME_OF_YOUR_DOMAIN>" });
  });
</script>
```

2. Add the following id to the input field and button where you collect emails

Add `id="referlistemail"` to the input field where the user enters their email and `id="referlistbutton"` to the button they click to sign up for your waitlist

```
<input type="text" id="referlistemail" />
<input type="button" id="referlistbutton" value="Join waitlist"/>
```

# Install Referlist on Squarespace



# Install Referlist via npm

Run `npm install referlist --save`

In your page which collects user email addresses:

```
import Referlist from referlist;

...


```

