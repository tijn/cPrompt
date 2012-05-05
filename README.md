cPrompt
=======

Starting on May 26th 2011 sites for any organisation based within the UK (even if their site is hosted overseas) must seek consent to store cookies on a user's computer, or device. Failure to comply could result in a fine up to &pound;500,000.

Demo
=====

A live demo can be seen [here](http://michaelwright.me/cPrompt), with some extra implementation information.

Who's behind it?
===============
- [@michaelw90](http://twitter.com/michaelw90) - Coding
- [@panda_doodle](http://twitter.com/panda_doodle) - Idea &amp; design.

FAQs
====

**Q. Does this protect me &amp; my site against the law?**<br />
*A. The requisites of every site differ, this is only a javascript solution, the cookie that is set can be accessed in server side code. If using this code, you need to ensure that it covers your site, however every effort has been taken to try to make this as compliant as possible.*

**Q. Can I set a 'Cookie Policy' URL for my visitors to read? I hear the law stipulates that I should have one.**<br />
*A. You can use the following chunk of code to set a cookie policy URL that will appear in the prompts:*

`cPrompt.cookieLink = 'http://mycookiepolicy.com/me.html';`

**Q. What if the user has javascript disabled?**<br />
*A. You could revert to a server side fallback, so that you are absolutely definitely covered.*

**Q. I'm being fined, I'm going to sue you 'cause you got me fined!**<br />
*A. Well, this is a very dickish thing to do. By you using this you accept that it doesn't necessarily provide full protection &amp; that you will ensure your own site protects you. Even from bears!*

**Q. This is pretty awesome, can I thank you?**<br />
*A. Why not watch the code, follow me on Twitter, or simply share this! All of these are a sign of thanks, and make me feel warm &amp; fuzzy inside.* 